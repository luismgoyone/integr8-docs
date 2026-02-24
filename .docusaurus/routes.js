import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/integr8-docs/__docusaurus/debug',
    component: ComponentCreator('/integr8-docs/__docusaurus/debug', 'f37'),
    exact: true
  },
  {
    path: '/integr8-docs/__docusaurus/debug/config',
    component: ComponentCreator('/integr8-docs/__docusaurus/debug/config', '436'),
    exact: true
  },
  {
    path: '/integr8-docs/__docusaurus/debug/content',
    component: ComponentCreator('/integr8-docs/__docusaurus/debug/content', '563'),
    exact: true
  },
  {
    path: '/integr8-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/integr8-docs/__docusaurus/debug/globalData', 'f44'),
    exact: true
  },
  {
    path: '/integr8-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/integr8-docs/__docusaurus/debug/metadata', '29d'),
    exact: true
  },
  {
    path: '/integr8-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/integr8-docs/__docusaurus/debug/registry', '9d4'),
    exact: true
  },
  {
    path: '/integr8-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/integr8-docs/__docusaurus/debug/routes', '20f'),
    exact: true
  },
  {
    path: '/integr8-docs/blog',
    component: ComponentCreator('/integr8-docs/blog', 'b8f'),
    exact: true
  },
  {
    path: '/integr8-docs/blog/archive',
    component: ComponentCreator('/integr8-docs/blog/archive', 'bec'),
    exact: true
  },
  {
    path: '/integr8-docs/blog/authors',
    component: ComponentCreator('/integr8-docs/blog/authors', '33c'),
    exact: true
  },
  {
    path: '/integr8-docs/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/integr8-docs/blog/authors/all-sebastien-lorber-articles', '2c9'),
    exact: true
  },
  {
    path: '/integr8-docs/blog/authors/yangshun',
    component: ComponentCreator('/integr8-docs/blog/authors/yangshun', '7c9'),
    exact: true
  },
  {
    path: '/integr8-docs/blog/first-blog-post',
    component: ComponentCreator('/integr8-docs/blog/first-blog-post', '0b6'),
    exact: true
  },
  {
    path: '/integr8-docs/blog/long-blog-post',
    component: ComponentCreator('/integr8-docs/blog/long-blog-post', 'ced'),
    exact: true
  },
  {
    path: '/integr8-docs/blog/mdx-blog-post',
    component: ComponentCreator('/integr8-docs/blog/mdx-blog-post', 'ea9'),
    exact: true
  },
  {
    path: '/integr8-docs/blog/tags',
    component: ComponentCreator('/integr8-docs/blog/tags', '334'),
    exact: true
  },
  {
    path: '/integr8-docs/blog/tags/docusaurus',
    component: ComponentCreator('/integr8-docs/blog/tags/docusaurus', 'bde'),
    exact: true
  },
  {
    path: '/integr8-docs/blog/tags/facebook',
    component: ComponentCreator('/integr8-docs/blog/tags/facebook', 'ef5'),
    exact: true
  },
  {
    path: '/integr8-docs/blog/tags/hello',
    component: ComponentCreator('/integr8-docs/blog/tags/hello', '9c1'),
    exact: true
  },
  {
    path: '/integr8-docs/blog/tags/hola',
    component: ComponentCreator('/integr8-docs/blog/tags/hola', '3b1'),
    exact: true
  },
  {
    path: '/integr8-docs/blog/welcome',
    component: ComponentCreator('/integr8-docs/blog/welcome', '6b9'),
    exact: true
  },
  {
    path: '/integr8-docs/markdown-page',
    component: ComponentCreator('/integr8-docs/markdown-page', '5d7'),
    exact: true
  },
  {
    path: '/integr8-docs/docs',
    component: ComponentCreator('/integr8-docs/docs', 'a31'),
    routes: [
      {
        path: '/integr8-docs/docs',
        component: ComponentCreator('/integr8-docs/docs', '20e'),
        routes: [
          {
            path: '/integr8-docs/docs',
            component: ComponentCreator('/integr8-docs/docs', '544'),
            routes: [
              {
                path: '/integr8-docs/docs/category/tutorial---basics',
                component: ComponentCreator('/integr8-docs/docs/category/tutorial---basics', '71a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/category/tutorial---extras',
                component: ComponentCreator('/integr8-docs/docs/category/tutorial---extras', '81f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/intro',
                component: ComponentCreator('/integr8-docs/docs/intro', 'ad9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/integr8-docs/docs/tutorial-basics/congratulations', '2b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/integr8-docs/docs/tutorial-basics/create-a-blog-post', '7fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/integr8-docs/docs/tutorial-basics/create-a-document', '44f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/integr8-docs/docs/tutorial-basics/create-a-page', 'aa9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/integr8-docs/docs/tutorial-basics/deploy-your-site', '71c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/integr8-docs/docs/tutorial-basics/markdown-features', '836'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/integr8-docs/docs/tutorial-extras/manage-docs-versions', '435'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/integr8-docs/docs/tutorial-extras/translate-your-site', 'b0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/integr8-docs/',
    component: ComponentCreator('/integr8-docs/', '5ab'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
