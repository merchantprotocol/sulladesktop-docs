const copyright = `Copyright © ${new Date().getFullYear()} Sulla AI.`;

const commonDocsOptions = {
  breadcrumbs: true,
  showLastUpdateAuthor: false,
  showLastUpdateTime: true,
  editUrl:
    'https://github.com/sulla-ai/sulla-desktop/blob/main/sulladesktop-docs/website/',
  remarkPlugins: [],
};

const isDeployPreview = process.env.PREVIEW_DEPLOY === 'true';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Sulla Desktop Documentation',
  tagline: 'AI-powered desktop app with Docker, automation, and local LLMs.',
  organizationName: 'sulla-ai',
  projectName: 'sulla-desktop',
  url: 'https://sulladesktop.com',
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
  favicon: 'img/favicon-sulla.png',
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
          src: 'img/logo-sulla-desktop-white.png',
          alt: 'Sulla Desktop',
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
            label: 'Guides',
            type: 'dropdown',
            position: 'right',
            items: [
              {
                label: 'Installation',
                type: 'doc',
                docId: 'installation_and_setup/first-time-installation-guide',
              },
              {
                label: 'AI Configuration',
                type: 'doc',
                docId: 'ai_configuration/choosing-ai-models',
              },
              {
                label: 'Docker & Development',
                type: 'doc',
                docId: 'docker_and_development/docker-desktop-integration',
              },
              {
                label: 'Extensions',
                type: 'doc',
                docId: 'extensions/index',
              },
            ],
          },
          {
            label: 'Develop',
            type: 'dropdown',
            position: 'right',
            items: [
              {
                label: 'API Reference',
                type: 'doc',
                docId: 'api/command-server',
              },
              {
                label: 'Workflows',
                type: 'doc',
                docId:
                  'automation_and_workflows/creating-your-first-n8n-workflow',
              },
              {
                label: 'Development',
                type: 'doc',
                docId: 'development/features',
              },
            ],
          },
          {
            href: 'https://github.com/sulla-ai/sulla-desktop',
            label: 'sulla-ai/sulla-desktop',
            position: 'right',
            className: 'navbar-github-link',
          },
        ],
      },
      image: 'img/logo-og.png',
      footer: {
        logo: {
          src: 'img/logo-sulla-desktop-white.png',
          alt: 'Sulla Desktop',
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
                label: 'Installation',
                to: '/installation_and_setup/first-time-installation-guide',
              },
              {
                label: 'AI Configuration',
                to: '/ai_configuration/choosing-ai-models',
              },
              {
                label: 'Extensions',
                to: '/extensions',
              },
            ],
          },
          {
            title: 'Develop',
            items: [
              {
                label: 'API Reference',
                to: '/api/command-server',
              },
              {
                label: 'Docker & Development',
                to: '/docker_and_development/docker-desktop-integration',
              },
              {
                label: 'Workflows',
                to: '/automation_and_workflows/creating-your-first-n8n-workflow',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/sulla-ai/sulla-desktop',
              },
              {
                label: 'Discussions',
                href: 'https://github.com/sulla-ai/sulla-desktop/discussions',
              },
            ],
          },
        ],
        copyright,
      },
      metadata: [{name: 'twitter:card', content: 'summary_large_image'}],
    }),
};
