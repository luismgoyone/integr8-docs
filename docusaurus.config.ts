import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Integr8 Docs',
  tagline: 'Scale and Grow with integrated data privacy, native fraud prevention and AI-enabled automation.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://luismgoyone.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/integr8-docs/',

  // GitHub pages deployment config.
  organizationName: 'luismgoyone',
  projectName: 'integr8-docs',

  onBrokenLinks: 'warn',

  markdown: {
    format: 'detect', // .md → CommonMark, .mdx → MDX (prevents <tag> parse errors)
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Integr8 Logo',
        src: 'https://integr8.co/wp-content/uploads/2024/06/Integr8-_-website.webp',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Getting Started', to: '/docs/getting-started'},
            {label: 'Offers', to: '/docs/offers'},
            {label: 'Fraud Prevention', to: '/docs/fraud-prevention'},
            {label: 'API Reference', to: '/docs/developers/api-documentation'},
          ],
        },
        {
          title: 'Platform',
          items: [
            {label: 'Reports & Analytics', to: '/docs/reports-and-analytics'},
            {label: 'Postback Manager', to: '/docs/postback-manager'},
            {label: 'Publishers', to: '/docs/publishers'},
            {label: 'Alert Management', to: '/docs/alert-management'},
          ],
        },
        {
          title: 'Company',
          items: [
            {label: 'Website', href: 'https://integr8.co'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Integr8. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
