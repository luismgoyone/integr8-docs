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
    path: '/integr8-docs/markdown-page',
    component: ComponentCreator('/integr8-docs/markdown-page', '5d7'),
    exact: true
  },
  {
    path: '/integr8-docs/docs',
    component: ComponentCreator('/integr8-docs/docs', '57c'),
    routes: [
      {
        path: '/integr8-docs/docs',
        component: ComponentCreator('/integr8-docs/docs', '575'),
        routes: [
          {
            path: '/integr8-docs/docs',
            component: ComponentCreator('/integr8-docs/docs', '308'),
            routes: [
              {
                path: '/integr8-docs/docs/alert-management/alert-management/index',
                component: ComponentCreator('/integr8-docs/docs/alert-management/alert-management/index', '29f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/alert-management/notifications-and-alerts',
                component: ComponentCreator('/integr8-docs/docs/alert-management/notifications-and-alerts', 'f30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/alert-management/rejection-rate-alert',
                component: ComponentCreator('/integr8-docs/docs/alert-management/rejection-rate-alert', '173'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/alert-management/total-volume-count',
                component: ComponentCreator('/integr8-docs/docs/alert-management/total-volume-count', '54c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/alert-management/traffic-increase-or-decrease',
                component: ComponentCreator('/integr8-docs/docs/alert-management/traffic-increase-or-decrease', '497'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/category/alert-management',
                component: ComponentCreator('/integr8-docs/docs/category/alert-management', 'ae9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/category/developers',
                component: ComponentCreator('/integr8-docs/docs/category/developers', '43a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/category/fraud-prevention',
                component: ComponentCreator('/integr8-docs/docs/category/fraud-prevention', '7d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/category/getting-started',
                component: ComponentCreator('/integr8-docs/docs/category/getting-started', 'f48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/category/how-to---advanced-guides',
                component: ComponentCreator('/integr8-docs/docs/category/how-to---advanced-guides', '7e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/category/offers',
                component: ComponentCreator('/integr8-docs/docs/category/offers', 'cfa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/category/postback-manager',
                component: ComponentCreator('/integr8-docs/docs/category/postback-manager', 'e70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/category/publishers',
                component: ComponentCreator('/integr8-docs/docs/category/publishers', '6ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/category/reports-and-analytics',
                component: ComponentCreator('/integr8-docs/docs/category/reports-and-analytics', '448'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/developers/api-documentation',
                component: ComponentCreator('/integr8-docs/docs/developers/api-documentation', '293'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/developers/developers/index',
                component: ComponentCreator('/integr8-docs/docs/developers/developers/index', '8d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/developers/parameter-list',
                component: ComponentCreator('/integr8-docs/docs/developers/parameter-list', 'eb1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/developers/platform-migration-assistant',
                component: ComponentCreator('/integr8-docs/docs/developers/platform-migration-assistant', '6fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/developers/server-ip-white-list',
                component: ComponentCreator('/integr8-docs/docs/developers/server-ip-white-list', '9f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/fraud-prevention/click-flooding',
                component: ComponentCreator('/integr8-docs/docs/fraud-prevention/click-flooding', 'c24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/fraud-prevention/click-spam',
                component: ComponentCreator('/integr8-docs/docs/fraud-prevention/click-spam', '5f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/fraud-prevention/compliance-checks',
                component: ComponentCreator('/integr8-docs/docs/fraud-prevention/compliance-checks', '58e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/fraud-prevention/conversion-rate-filter',
                component: ComponentCreator('/integr8-docs/docs/fraud-prevention/conversion-rate-filter', '4e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/fraud-prevention/conversion-rejection-threshold',
                component: ComponentCreator('/integr8-docs/docs/fraud-prevention/conversion-rejection-threshold', '204'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/fraud-prevention/data-validation',
                component: ComponentCreator('/integr8-docs/docs/fraud-prevention/data-validation', '348'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/fraud-prevention/device-anomaly-detection',
                component: ComponentCreator('/integr8-docs/docs/fraud-prevention/device-anomaly-detection', '4ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/fraud-prevention/device-id-check',
                component: ComponentCreator('/integr8-docs/docs/fraud-prevention/device-id-check', '283'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/fraud-prevention/duplicate-user-detection',
                component: ComponentCreator('/integr8-docs/docs/fraud-prevention/duplicate-user-detection', '4af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/fraud-prevention/emulator-and-bots',
                component: ComponentCreator('/integr8-docs/docs/fraud-prevention/emulator-and-bots', '15a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/fraud-prevention/fraud-prevention/index',
                component: ComponentCreator('/integr8-docs/docs/fraud-prevention/fraud-prevention/index', '236'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/fraud-prevention/isp-filter',
                component: ComponentCreator('/integr8-docs/docs/fraud-prevention/isp-filter', 'ff2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/fraud-prevention/keyword-filter',
                component: ComponentCreator('/integr8-docs/docs/fraud-prevention/keyword-filter', '41e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/fraud-prevention/low-session-time-anomaly',
                component: ComponentCreator('/integr8-docs/docs/fraud-prevention/low-session-time-anomaly', '597'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/fraud-prevention/session-time-filter',
                component: ComponentCreator('/integr8-docs/docs/fraud-prevention/session-time-filter', '1a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/fraud-prevention/sub-id-validity-check',
                component: ComponentCreator('/integr8-docs/docs/fraud-prevention/sub-id-validity-check', '960'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/fraud-prevention/third-party-rejection',
                component: ComponentCreator('/integr8-docs/docs/fraud-prevention/third-party-rejection', '9d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/fraud-prevention/vpn-and-residential-proxy-detection',
                component: ComponentCreator('/integr8-docs/docs/fraud-prevention/vpn-and-residential-proxy-detection', '754'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/fraud-prevention/wrong-install-time',
                component: ComponentCreator('/integr8-docs/docs/fraud-prevention/wrong-install-time', '79d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/getting-started/advertiser-setup',
                component: ComponentCreator('/integr8-docs/docs/getting-started/advertiser-setup', '38d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/getting-started/data-privacy',
                component: ComponentCreator('/integr8-docs/docs/getting-started/data-privacy', '312'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/getting-started/getting-started/index',
                component: ComponentCreator('/integr8-docs/docs/getting-started/getting-started/index', '545'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/getting-started/global-tracking-settings',
                component: ComponentCreator('/integr8-docs/docs/getting-started/global-tracking-settings', '4b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/getting-started/how-to-reach-support',
                component: ComponentCreator('/integr8-docs/docs/getting-started/how-to-reach-support', '80c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/getting-started/organization',
                component: ComponentCreator('/integr8-docs/docs/getting-started/organization', '8e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/getting-started/organization-billing',
                component: ComponentCreator('/integr8-docs/docs/getting-started/organization-billing', 'f76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/getting-started/server-uptime',
                component: ComponentCreator('/integr8-docs/docs/getting-started/server-uptime', '44a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/getting-started/user-management',
                component: ComponentCreator('/integr8-docs/docs/getting-started/user-management', '53d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/getting-started/white-label-dashboard',
                component: ComponentCreator('/integr8-docs/docs/getting-started/white-label-dashboard', '749'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/how-to-advanced-guides/conversion-rejection-endpoint',
                component: ComponentCreator('/integr8-docs/docs/how-to-advanced-guides/conversion-rejection-endpoint', '3dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/how-to-advanced-guides/data-privacy-features',
                component: ComponentCreator('/integr8-docs/docs/how-to-advanced-guides/data-privacy-features', 'f8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/how-to-advanced-guides/how-to-advanced-guides/index',
                component: ComponentCreator('/integr8-docs/docs/how-to-advanced-guides/how-to-advanced-guides/index', 'f9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/how-to-advanced-guides/offer-url-parser',
                component: ComponentCreator('/integr8-docs/docs/how-to-advanced-guides/offer-url-parser', '6cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/integrations',
                component: ComponentCreator('/integr8-docs/docs/integrations', 'd65'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/offers/blocked-subids',
                component: ComponentCreator('/integr8-docs/docs/offers/blocked-subids', 'e7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/offers/conversion-tracking',
                component: ComponentCreator('/integr8-docs/docs/offers/conversion-tracking', 'ba5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/offers/coupon-codes',
                component: ComponentCreator('/integr8-docs/docs/offers/coupon-codes', '3a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/offers/custom-payouts',
                component: ComponentCreator('/integr8-docs/docs/offers/custom-payouts', 'a8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/offers/custom-tracking-domain',
                component: ComponentCreator('/integr8-docs/docs/offers/custom-tracking-domain', '152'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/offers/events-tracking',
                component: ComponentCreator('/integr8-docs/docs/offers/events-tracking', '37f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/offers/fraud-detection',
                component: ComponentCreator('/integr8-docs/docs/offers/fraud-detection', 'f7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/offers/javascript-tracking-link',
                component: ComponentCreator('/integr8-docs/docs/offers/javascript-tracking-link', '603'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/offers/landing-pages',
                component: ComponentCreator('/integr8-docs/docs/offers/landing-pages', 'c6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/offers/offer-cappings',
                component: ComponentCreator('/integr8-docs/docs/offers/offer-cappings', 'c26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/offers/offer-setup',
                component: ComponentCreator('/integr8-docs/docs/offers/offer-setup', '912'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/offers/offers/index',
                component: ComponentCreator('/integr8-docs/docs/offers/offers/index', 'be7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/offers/product-feeds',
                component: ComponentCreator('/integr8-docs/docs/offers/product-feeds', '61f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/offers/revenue-and-payout',
                component: ComponentCreator('/integr8-docs/docs/offers/revenue-and-payout', '279'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/offers/smart-link',
                component: ComponentCreator('/integr8-docs/docs/offers/smart-link', 'e0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/offers/targeting',
                component: ComponentCreator('/integr8-docs/docs/offers/targeting', '059'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/offers/tracking-link',
                component: ComponentCreator('/integr8-docs/docs/offers/tracking-link', '1d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/postback-manager/affiliate-postback-setup',
                component: ComponentCreator('/integr8-docs/docs/postback-manager/affiliate-postback-setup', '361'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/postback-manager/connect-conversion-data-with-your-crm',
                component: ComponentCreator('/integr8-docs/docs/postback-manager/connect-conversion-data-with-your-crm', '30e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/postback-manager/postback-logs',
                component: ComponentCreator('/integr8-docs/docs/postback-manager/postback-logs', 'a6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/postback-manager/postback-manager/index',
                component: ComponentCreator('/integr8-docs/docs/postback-manager/postback-manager/index', 'bc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/postback-manager/postback-types',
                component: ComponentCreator('/integr8-docs/docs/postback-manager/postback-types', 'a22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/publishers/publisher-billing',
                component: ComponentCreator('/integr8-docs/docs/publishers/publisher-billing', 'f76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/publishers/publisher-payments',
                component: ComponentCreator('/integr8-docs/docs/publishers/publisher-payments', 'd3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/publishers/publisher-setup',
                component: ComponentCreator('/integr8-docs/docs/publishers/publisher-setup', '209'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/publishers/publishers/index',
                component: ComponentCreator('/integr8-docs/docs/publishers/publishers/index', '9fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/reports-and-analytics/click-reports',
                component: ComponentCreator('/integr8-docs/docs/reports-and-analytics/click-reports', '537'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/reports-and-analytics/conversion-and-events-report',
                component: ComponentCreator('/integr8-docs/docs/reports-and-analytics/conversion-and-events-report', '736'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/reports-and-analytics/download-center',
                component: ComponentCreator('/integr8-docs/docs/reports-and-analytics/download-center', 'e09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/reports-and-analytics/export-reports',
                component: ComponentCreator('/integr8-docs/docs/reports-and-analytics/export-reports', '8e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/reports-and-analytics/overview-reports',
                component: ComponentCreator('/integr8-docs/docs/reports-and-analytics/overview-reports', '2fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/reports-and-analytics/reports-and-analytics/index',
                component: ComponentCreator('/integr8-docs/docs/reports-and-analytics/reports-and-analytics/index', '4d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/reports-and-analytics/server-logs',
                component: ComponentCreator('/integr8-docs/docs/reports-and-analytics/server-logs', '833'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/reports-and-analytics/shared-reports',
                component: ComponentCreator('/integr8-docs/docs/reports-and-analytics/shared-reports', '057'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integr8-docs/docs/reports-and-analytics/traffic-insights',
                component: ComponentCreator('/integr8-docs/docs/reports-and-analytics/traffic-insights', 'c6a'),
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
