/**
 * outline-export.ts
 *
 * Exports a single Outline collection to a Docusaurus-compatible docs/ structure.
 *
 * Usage:
 *   npm run outline:sync
 *   # or
 *   npx ts-node scripts/outline-export.ts
 *
 * Required env vars (copy .env.example → .env and fill in):
 *   OUTLINE_API_KEY         — Outline API key (ol_api_...)
 *   OUTLINE_COLLECTION_ID   — UUID of the collection to export
 *   OUTLINE_BASE_URL        — Outline base URL (default: https://app.getoutline.com)
 */

import * as fs from 'fs-extra';
import * as path from 'path';
import * as https from 'https';
import * as http from 'http';
import { URL } from 'url';
import slugify from 'slugify';
import * as dotenv from 'dotenv';

dotenv.config();

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const OUTLINE_API_KEY = process.env.OUTLINE_API_KEY;
const OUTLINE_COLLECTION_ID = process.env.OUTLINE_COLLECTION_ID;
const OUTLINE_BASE_URL = (process.env.OUTLINE_BASE_URL ?? 'https://app.getoutline.com').replace(/\/$/, '');

const DOCS_DIR = path.resolve(__dirname, '../docs');
const IMAGES_DIR = path.resolve(__dirname, '../static/img/outline');
const IMAGES_PUBLIC_PATH = '/img/outline';

if (!OUTLINE_API_KEY) {
  console.error('ERROR: OUTLINE_API_KEY is not set. Copy .env.example to .env and fill it in.');
  process.exit(1);
}
if (!OUTLINE_COLLECTION_ID) {
  console.error('ERROR: OUTLINE_COLLECTION_ID is not set. Copy .env.example to .env and fill it in.');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface NavigationNode {
  id: string;
  title: string;
  url: string;
  children: NavigationNode[];
}

// ---------------------------------------------------------------------------
// HTTP helpers
// ---------------------------------------------------------------------------

async function outlinePost<T>(endpoint: string, body: Record<string, unknown>): Promise<T> {
  return withRetry(() => _outlinePost<T>(endpoint, body));
}

function _outlinePost<T>(endpoint: string, body: Record<string, unknown>): Promise<T> {
  return new Promise((resolve, reject) => {
    const url = new URL(`${OUTLINE_BASE_URL}/api/${endpoint}`);
    const payload = JSON.stringify(body);

    const options = {
      hostname: url.hostname,
      port: url.port || 443,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OUTLINE_API_KEY}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload),
      },
    };

    const lib = url.protocol === 'https:' ? https : http;
    const req = lib.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode === 429) {
          const retryAfter = parseInt(res.headers['retry-after'] as string ?? '5', 10);
          reject({ isRateLimit: true, retryAfter });
          return;
        }
        if (!res.statusCode || res.statusCode < 200 || res.statusCode >= 300) {
          reject(new Error(`Outline API ${endpoint} returned ${res.statusCode}: ${data}`));
          return;
        }
        try {
          resolve(JSON.parse(data) as T);
        } catch {
          reject(new Error(`Failed to parse response from ${endpoint}: ${data}`));
        }
      });
    });

    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

async function withRetry<T>(fn: () => Promise<T>, attempts = 5): Promise<T> {
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err: unknown) {
      const e = err as { isRateLimit?: boolean; retryAfter?: number };
      if (e?.isRateLimit && i < attempts - 1) {
        const wait = (e.retryAfter ?? 5) * 1000 * Math.pow(2, i);
        console.log(`  Rate limited. Waiting ${wait / 1000}s before retry...`);
        await sleep(wait);
      } else {
        throw err;
      }
    }
  }
  throw new Error('Max retries exceeded');
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ---------------------------------------------------------------------------
// Image download helper
// ---------------------------------------------------------------------------

async function downloadImage(imageUrl: string): Promise<string | null> {
  try {
    const urlObj = new URL(imageUrl);
    const ext = path.extname(urlObj.pathname) || '.png';
    // Build a stable filename from the URL path
    const rawName = urlObj.pathname.replace(/\//g, '_').replace(/^_/, '');
    const filename = rawName.endsWith(ext) ? rawName : `${rawName}${ext}`;
    const destPath = path.join(IMAGES_DIR, filename);

    if (await fs.pathExists(destPath)) {
      return filename;
    }

    await fs.ensureDir(IMAGES_DIR);

    return new Promise((resolve, reject) => {
      const lib = urlObj.protocol === 'https:' ? https : http;
      const file = fs.createWriteStream(destPath);

      const request = lib.get(imageUrl, { headers: { 'Authorization': `Bearer ${OUTLINE_API_KEY}` } }, (res) => {
        if (res.statusCode === 302 || res.statusCode === 301) {
          // Follow redirect
          file.close();
          fs.remove(destPath).then(() => {
            downloadImage(res.headers.location!).then(resolve).catch(reject);
          });
          return;
        }
        if (!res.statusCode || res.statusCode < 200 || res.statusCode >= 300) {
          file.close();
          fs.remove(destPath);
          resolve(null);
          return;
        }
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(filename); });
        file.on('error', (err) => { fs.remove(destPath); reject(err); });
      });

      request.on('error', (err) => { fs.remove(destPath); reject(err); });
    });
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Markdown processing
// ---------------------------------------------------------------------------

async function processImages(markdown: string): Promise<string> {
  // Match ![alt](url) and <img src="url">
  const mdImageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  const htmlImageRegex = /<img[^>]+src="([^"]+)"[^>]*>/g;

  const urlsToProcess: string[] = [];

  let match: RegExpExecArray | null;
  while ((match = mdImageRegex.exec(markdown)) !== null) {
    const url = match[2];
    if (url.startsWith('http')) urlsToProcess.push(url);
  }
  while ((match = htmlImageRegex.exec(markdown)) !== null) {
    const url = match[1];
    if (url.startsWith('http')) urlsToProcess.push(url);
  }

  // Download all images in parallel
  const urlToFilename: Record<string, string> = {};
  await Promise.all(
    [...new Set(urlsToProcess)].map(async (url) => {
      const filename = await downloadImage(url);
      if (filename) urlToFilename[url] = filename;
    })
  );

  // Rewrite URLs
  let result = markdown;
  for (const [originalUrl, filename] of Object.entries(urlToFilename)) {
    const localPath = `${IMAGES_PUBLIC_PATH}/${filename}`;
    result = result.split(originalUrl).join(localPath);
  }

  return result;
}

function extractDescription(markdown: string): string {
  const lines = markdown.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    // Skip headings, empty lines, images, code fences, html tags
    if (
      trimmed &&
      !trimmed.startsWith('#') &&
      !trimmed.startsWith('!') &&
      !trimmed.startsWith('```') &&
      !trimmed.startsWith('<') &&
      trimmed.length > 10
    ) {
      // Return first 160 chars, strip inline markdown
      return trimmed.replace(/[*_`[\]]/g, '').slice(0, 160);
    }
  }
  return '';
}

function buildFrontmatter(fields: Record<string, string | number>): string {
  const lines = ['---'];
  for (const [key, value] of Object.entries(fields)) {
    if (value !== '' && value !== undefined) {
      lines.push(`${key}: ${typeof value === 'string' ? JSON.stringify(value) : value}`);
    }
  }
  lines.push('---', '');
  return lines.join('\n');
}

function makeSlug(title: string): string {
  return slugify(title, { lower: true, strict: true });
}

// ---------------------------------------------------------------------------
// File system helpers
// ---------------------------------------------------------------------------

function safeFilename(title: string): string {
  return slugify(title, { lower: true, strict: true, replacement: '-' });
}

// ---------------------------------------------------------------------------
// Main export logic
// ---------------------------------------------------------------------------

async function exportDocument(
  node: NavigationNode,
  dirPath: string,
  position: number
): Promise<void> {
  const hasChildren = node.children && node.children.length > 0;

  if (hasChildren) {
    // This node is a category — create a folder + _category_.json
    const folderName = safeFilename(node.title);
    const folderPath = path.join(dirPath, folderName);
    await fs.ensureDir(folderPath);

    const category = {
      label: node.title,
      position,
      link: { type: 'generated-index' },
    };
    await fs.writeJson(path.join(folderPath, '_category_.json'), category, { spaces: 2 });
    console.log(`  [folder] ${folderPath}`);

    // Export the document itself as index.md inside the folder (if it has content)
    await exportDocumentContent(node, folderPath, 1, true);

    // Export children
    for (let i = 0; i < node.children.length; i++) {
      await exportDocument(node.children[i], folderPath, i + 2);
    }
  } else {
    // Leaf document — export as .md file
    await exportDocumentContent(node, dirPath, position, false);
  }
}

async function exportDocumentContent(
  node: NavigationNode,
  dirPath: string,
  position: number,
  isIndex: boolean
): Promise<void> {
  console.log(`  [doc] ${node.title} (id: ${node.id})`);

  const response = await outlinePost<{ data: string }>('documents.export', {
    id: node.id,
  });

  let markdown = response.data ?? '';

  // Process and localise images
  markdown = await processImages(markdown);

  // Strip leading H1 if it matches the document title (Outline adds it)
  markdown = markdown.replace(/^#\s+.+\n+/, '').trim();

  const description = extractDescription(markdown);
  const slug = makeSlug(node.title);

  const frontmatter = buildFrontmatter({
    title: node.title,
    slug: isIndex ? makeSlug(node.title) + '/index' : slug,
    sidebar_position: position,
    ...(description ? { description } : {}),
  });

  const filename = isIndex ? 'index.md' : `${safeFilename(node.title)}.md`;
  const filePath = path.join(dirPath, filename);

  await fs.outputFile(filePath, frontmatter + '\n' + markdown + '\n');
  console.log(`    → ${filePath}`);
}

async function run(): Promise<void> {
  console.log('Outline → Docusaurus export');
  console.log(`Collection: ${OUTLINE_COLLECTION_ID}`);
  console.log(`Output:     ${DOCS_DIR}`);
  console.log('');

  // 1. Fetch the collection document tree
  console.log('Fetching document tree...');
  const treeResponse = await outlinePost<{ data: NavigationNode[] }>(
    'collections.documents',
    { id: OUTLINE_COLLECTION_ID }
  );

  const nodes: NavigationNode[] = treeResponse.data ?? [];
  if (nodes.length === 0) {
    console.log('No documents found in collection.');
    return;
  }

  console.log(`Found ${nodes.length} top-level node(s). Starting export...\n`);

  // 2. Ensure image output dir exists
  await fs.ensureDir(IMAGES_DIR);

  // 3. Export each top-level node
  for (let i = 0; i < nodes.length; i++) {
    await exportDocument(nodes[i], DOCS_DIR, i + 1);
  }

  console.log('\nDone.');
}

run().catch((err) => {
  console.error('Export failed:', err);
  process.exit(1);
});
