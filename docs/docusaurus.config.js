/* eslint-disable sort-keys */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { npm2yarn2pnpm } = require('@sapphire/docusaurus-plugin-npm2yarn2pnpm');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  tagline:
    'Facebook, Google, Twitter, and other logins for your Keystone app. Quick, easy, and secure.',
  title: 'Keystone6 OAuth',
  url: 'https://ijs.to',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ijsto/keystone-plugins/edit/main/docs',
          remarkPlugins: [npm2yarn2pnpm],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        title: 'Plugins',
        logo: {
          alt: 'Keystone6 Plugins',
          src: 'images/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'api-reference/core',
            position: 'left',
            label: 'API',
          },
          { to: 'https://ijs.to/tags/keystone6', label: 'Articles', position: 'left' },
          {
            to: 'https://www.npmjs.com/package/keystone-6-oauth',
            label: 'npm',
            position: 'right',
          },
          {
            href: 'https://github.com/ijsto/keystone-plugins',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/GrdX6jRnFH',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ijstodev',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Articles',
                to: 'https://ijs.to/articles',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ijsto/keystone-plugins',
              },
            ],
          },
        ],
        style: 'dark',
        copyright: `© 2021-${new Date().getFullYear()}.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
