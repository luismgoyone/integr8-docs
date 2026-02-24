# Integr8 Docs — Setup & Architecture

## What This Is
A Docusaurus v3 documentation site that automatically syncs content from an Outline knowledge base collection and deploys to GitHub Pages.

**Live site:** https://luismgoyone.github.io/integr8-docs/
**GitHub repo:** https://github.com/luismgoyone/integr8-docs

---

## Stack
- **Docusaurus 3.9.2** — static site generator
- **Outline API** — content source
- **GitHub Actions** — CI/CD (nightly sync + deploy)
- **GitHub Pages** — hosting

---

## Project Structure

```
integr8-docs/
├── docs/                        # Auto-generated from Outline (do not edit manually)
│   ├── getting-started/
│   ├── offers/
│   ├── fraud-prevention/
│   ├── reports-and-analytics/
│   ├── postback-manager/
│   ├── publishers/
│   ├── alert-management/
│   ├── developers/
│   ├── how-to-advanced-guides/
│   └── integrations.md
├── static/img/outline/          # Images downloaded from Outline (auto-generated)
├── scripts/
│   └── outline-export.ts        # Outline → Docusaurus export script
├── src/
│   ├── pages/index.tsx          # Homepage
│   └── css/custom.css           # Integr8 brand styles
├── .github/workflows/
│   ├── sync.yml                 # Nightly Outline sync
│   └── deploy.yml               # Build & deploy to GitHub Pages
├── docusaurus.config.ts         # Site configuration
├── sidebars.ts                  # Auto-generated sidebar
├── .env.example                 # Environment variable template
└── OUTLINE_EXPORT_PLAN.md       # Original implementation plan
```

---

## Environment Variables

Copy `.env.example` to `.env` and fill in:

| Variable | Description |
|----------|-------------|
| `OUTLINE_API_KEY` | Outline API key — Settings → API & Apps → Create New API Key |
| `OUTLINE_COLLECTION_ID` | ID or slug of the Outline collection to export |
| `OUTLINE_BASE_URL` | Outline instance URL (default: `https://app.getoutline.com`) |

`.env` is gitignored and never committed.

---

## Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
cp .env.example .env
# Fill in OUTLINE_API_KEY and OUTLINE_COLLECTION_ID in .env

# 3. Sync content from Outline
npm run outline:sync

# 4. Preview locally
npm run start        # http://localhost:3000/integr8-docs/

# 5. Build for production
npm run build
npm run serve        # Preview production build locally
```

---

## How the Export Script Works (`scripts/outline-export.ts`)

1. Authenticates with Outline using `Bearer` token
2. Fetches the full document tree via `POST /api/collections.documents`
3. Recursively walks the tree, mirroring the hierarchy as folders in `docs/`
4. Exports each document as Markdown via `POST /api/documents.export`
5. Auto-generates frontmatter for each file:
   - `title` — from Outline document title
   - `slug` — slugified from title (e.g. `Getting Started` → `getting-started`)
   - `sidebar_position` — from the node's position in its parent
   - `description` — extracted from first paragraph
6. Creates `_category_.json` for each folder-level node
7. Downloads images to `static/img/outline/` and rewrites URLs in markdown
8. Handles Outline API rate limiting with exponential backoff

---

## GitHub Actions Workflows

### `sync.yml` — Nightly Sync
- **Trigger:** Cron at 2:00 AM UTC daily, or manual dispatch
- **What it does:** Runs `npm run outline:sync`, commits any changed files, pushes to `main`
- **Required secrets:** `OUTLINE_API_KEY`, `OUTLINE_COLLECTION_ID`

### `deploy.yml` — Build & Deploy
- **Trigger:** Every push to `main` (including from the sync workflow)
- **What it does:** Runs `npm run build`, deploys `build/` to GitHub Pages
- **Permissions:** `pages: write`, `id-token: write`

---

## GitHub Setup Checklist

- [x] Repo made **public** (required for free GitHub Pages)
- [x] **Settings → Pages → Source** set to `GitHub Actions`
- [x] **Settings → Environments → github-pages** allows `main` branch
- [x] **Settings → Secrets → Actions** contains:
  - `OUTLINE_API_KEY`
  - `OUTLINE_COLLECTION_ID`

---

## Key Configuration (`docusaurus.config.ts`)

| Setting | Value |
|---------|-------|
| `url` | `https://luismgoyone.github.io` |
| `baseUrl` | `/integr8-docs/` |
| `organizationName` | `luismgoyone` |
| `projectName` | `integr8-docs` |
| `markdown.format` | `detect` — `.md` files use CommonMark (prevents MDX parse errors from angle brackets in content) |
| `onBrokenLinks` | `warn` |

---

## Bunny.net CDN Strategy (Future Phase)

When ready to implement, replace local image storage in the export script with:

1. Upload each image to Bunny.net Storage API:
   ```
   PUT https://storage.bunnycdn.com/{storageZone}/img/outline/{filename}
   Authorization: {BUNNY_API_KEY}
   ```
2. Rewrite image URLs in markdown to:
   ```
   https://{pullZone}.b-cdn.net/img/outline/{filename}
   ```
3. Add env vars: `BUNNY_STORAGE_ZONE`, `BUNNY_API_KEY`, `BUNNY_CDN_URL`

Benefits: images served from global CDN edge, removed from git repo.

---

## Theming

- Primary color: `#0693e3` (Integr8 blue)
- Hero gradient: `linear-gradient(135deg, #0693e3 0%, #054a7c 100%)`
- Logo: loaded from `https://integr8.co/wp-content/uploads/2024/06/Integr8-_-website.webp`
- Custom styles in `src/css/custom.css`
- Homepage in `src/pages/index.tsx`
