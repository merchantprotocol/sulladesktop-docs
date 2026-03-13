const copyright = `Copyright © ${new Date().getFullYear()} Merchant Protocol, LLC.`;

const commonDocsOptions = {
  breadcrumbs: true,
  showLastUpdateAuthor: false,
  showLastUpdateTime: true,
  editUrl:
    'https://github.com/merchantprotocol/protocol-docs/blob/main/website/',
  remarkPlugins: [],
};

const isDeployPreview = process.env.PREVIEW_DEPLOY === 'true';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Protocol Documentation',
  tagline: 'Continuous deployment and configuration management for PHP applications.',
  organizationName: 'merchantprotocol',
  projectName: 'protocol-docs',
  url: 'https://docs.merchantprotocol.com',
  baseUrl: '/',
  clientModules: [require.resolve('./modules/jumpToFragment.js')],
  trailingSlash: false,
  scripts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/focus-visible@5.2.0/dist/focus-visible.min.js',
      defer: true,
    },
  ],
  favicon: 'img/favicon.ico',
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
        additionalLanguages: [
          'diff',
          'bash',
          'json',
          'yaml',
          'php',
          'ini',
        ],
      },
      navbar: {
        title: 'Protocol',
        style: 'primary',
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            label: 'Getting Started',
            position: 'left',
          },
          {
            label: 'Guides',
            type: 'dropdown',
            position: 'left',
            items: [
              {
                label: 'Installation',
                type: 'doc',
                docId: 'installation',
              },
              {
                label: 'Configuration',
                type: 'doc',
                docId: 'configuration',
              },
              {
                label: 'Commands',
                type: 'doc',
                docId: 'commands',
              },
              {
                label: 'Secrets Management',
                type: 'doc',
                docId: 'secrets',
              },
            ],
          },
          {
            label: 'Operations',
            type: 'dropdown',
            position: 'left',
            items: [
              {
                label: 'Deployment Strategies',
                type: 'doc',
                docId: 'deployment-types',
              },
              {
                label: 'Shadow Deployment',
                type: 'doc',
                docId: 'blue-green',
              },
              {
                label: 'Deployment SOPs',
                type: 'doc',
                docId: 'deployment-sops',
              },
              {
                label: 'Incident Response',
                type: 'doc',
                docId: 'incident-response',
              },
            ],
          },
          {
            href: 'https://github.com/merchantprotocol/protocol',
            'aria-label': 'GitHub repository',
            position: 'right',
            className: 'navbar-github-link',
          },
        ],
      },
      image: 'img/logo-og.png',
      footer: {
        style: 'light',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
              {
                label: 'Installation',
                to: '/docs/installation',
              },
              {
                label: 'Commands',
                to: '/docs/commands',
              },
              {
                label: 'Configuration',
                to: '/docs/configuration',
              },
            ],
          },
          {
            title: 'Operations',
            items: [
              {
                label: 'Deployment Strategies',
                to: '/docs/deployment-types',
              },
              {
                label: 'Secrets Management',
                to: '/docs/secrets',
              },
              {
                label: 'Security & SOC 2',
                to: '/docs/security',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/merchantprotocol/protocol',
              },
              {
                label: 'Discussions',
                href: 'https://github.com/merchantprotocol/protocol/discussions',
              },
            ],
          },
        ],
        copyright,
      },
      metadata: [
        {name: 'twitter:card', content: 'summary_large_image'},
      ],
    }),
};
