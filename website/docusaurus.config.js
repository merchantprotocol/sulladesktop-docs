const copyright = `Copyright © ${new Date().getFullYear()} DataRipple.ai`;

const commonDocsOptions = {
  breadcrumbs: true,
  showLastUpdateAuthor: false,
  showLastUpdateTime: true,
  editUrl:
    'https://github.com/dataripple/ghostagent/blob/main/ghostagent-docs/website/',
  remarkPlugins: [],
};

const isDeployPreview = process.env.PREVIEW_DEPLOY === 'true';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Ghost Agent Documentation',
  tagline: 'AI-powered call center agent platform by DataRipple.',
  organizationName: 'dataripple',
  projectName: 'ghostagent',
  url: 'https://ghostagent.dataripple.ai',
  baseUrl: '/',
  clientModules: [
    require.resolve('./modules/jumpToFragment.js'),
    require.resolve('./modules/crtEffects.js'),
  ],
  trailingSlash: false,
  scripts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/focus-visible@5.2.0/dist/focus-visible.min.js',
      defer: true,
    },
  ],
  favicon: 'img/favicon.png',
  titleDelimiter: '·',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'warn',
  webpack: {
    jsLoader: isServer => ({
      loader: require.resolve('esbuild-loader'),
      options: {
        loader: 'tsx',
        format: isServer ? 'cjs' : undefined,
        target: isServer ? 'node12' : 'es2017',
      },
    }),
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.json'),
          routeBasePath: '/',
          ...commonDocsOptions,
        },
        blog: {
          path: 'blog',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Blog Posts',
          feedOptions: {
            type: 'all',
            copyright,
          },
        },
        theme: {
          customCss: [
            require.resolve('./src/css/_shared.scss'),
            require.resolve('./src/css/styles.hasura.css'),
            require.resolve('./src/css/protocol-custom.scss'),
          ],
        },
      }),
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      prism: {
        defaultLanguage: 'bash',
        theme: require('./core/PrismTheme'),
        additionalLanguages: ['diff', 'bash', 'json', 'yaml', 'php', 'ini'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '',
        logo: {
          src: 'img/logo-ghostagent-white.png',
          alt: 'Ghost Agent',
          height: 36,
        },
        style: 'dark',
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            label: 'Getting Started',
            position: 'right',
          },
          {
            label: 'Architecture',
            type: 'dropdown',
            position: 'right',
            items: [
              {
                label: 'Overview',
                type: 'doc',
                docId: 'architecture/overview',
              },
              {
                label: 'Scaling',
                type: 'doc',
                docId: 'architecture/scaling',
              },
            ],
          },
          {
            label: 'API',
            type: 'dropdown',
            position: 'right',
            items: [
              {
                label: 'Authentication',
                type: 'doc',
                docId: 'api/authentication',
              },
              {
                label: 'Users & Roles',
                type: 'doc',
                docId: 'api/users',
              },
              {
                label: 'Actions',
                type: 'doc',
                docId: 'api/actions',
              },
              {
                label: 'Gateway Control',
                type: 'doc',
                docId: 'api/gateway',
              },
              {
                label: 'WebSocket Events',
                type: 'doc',
                docId: 'api/websocket',
              },
            ],
          },
          {
            label: 'Frontend',
            type: 'dropdown',
            position: 'right',
            items: [
              {
                label: 'Pages & Routes',
                type: 'doc',
                docId: 'frontend/pages',
              },
              {
                label: 'Live Dashboard',
                type: 'doc',
                docId: 'frontend/dashboard',
              },
              {
                label: 'Features',
                type: 'doc',
                docId: 'frontend/features',
              },
            ],
          },
          {
            label: 'Integrations',
            type: 'dropdown',
            position: 'right',
            items: [
              {
                label: 'ElevenLabs',
                type: 'doc',
                docId: 'integrations/elevenlabs',
              },
              {
                label: 'Vonage',
                type: 'doc',
                docId: 'integrations/vonage',
              },
              {
                label: 'Other',
                type: 'doc',
                docId: 'integrations/other',
              },
            ],
          },
          {
            href: 'https://github.com/dataripple/ghostagent',
            label: 'dataripple/ghostagent',
            position: 'right',
            className: 'navbar-github-link',
          },
        ],
      },
      image: 'img/logo-og.png',
      footer: {
        logo: {
          src: 'img/logo-ghostagent-white.png',
          alt: 'Ghost Agent',
          height: 28,
        },
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/getting-started',
              },
              {
                label: 'Architecture',
                to: '/architecture/overview',
              },
              {
                label: 'API Reference',
                to: '/api/authentication',
              },
              {
                label: 'WebSocket Events',
                to: '/api/websocket',
              },
            ],
          },
          {
            title: 'Platform',
            items: [
              {
                label: 'Frontend Pages',
                to: '/frontend/pages',
              },
              {
                label: 'Live Dashboard',
                to: '/frontend/dashboard',
              },
              {
                label: 'Database Schema',
                to: '/backend/database',
              },
              {
                label: 'Tech Stack',
                to: '/backend/tech-stack',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/dataripple/ghostagent',
              },
              {
                label: 'Discussions',
                href: 'https://github.com/dataripple/ghostagent/discussions',
              },
            ],
          },
        ],
        copyright,
      },
      metadata: [{name: 'twitter:card', content: 'summary_large_image'}],
    }),
};
