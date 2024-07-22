// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KuronekoServer Docs',
  tagline: 'KuronekoServer Service Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.krnk.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KuronekoServer', // Usually your GitHub org/user name.
  projectName: 'docs.krnk.org', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en', 'ko'],
    localeConfigs: {
      ja: {
        label: '日本語',
      },
      en: {
        label: 'English',
      },
      ko: {
        label: '한국어',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/KuronekoServer/docs.krnk.org/tree/docusaurus/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/KuronekoServer/docs.krnk.org/tree/docusaurus/blog/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo-banner.webp',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'KuronekoServer Docs',
        logo: {
          alt: 'KuronekoServer Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {to: '/blog', label: 'Historty', position: 'left'},
          {
            href: 'https://github.com/KuronekoServer/docs.krnk.org',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pages',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
              {
                label: 'Historty',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.krnk.org',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/kuroneko_server',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'HomePage',
                href: 'https://krnk.org',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/KuronekoServer',
              },
            ],
          },
        ],
        logo: {
          alt: 'KuronekoServer Logo',
          src: 'https://cdn.krnk.org/kuronekoserver/logo-wide-kawaii.webp',
          href: 'https://krnk.org',
        },
        copyright: `Copyright © 2018-2024 KuronekoServer All Rights Reserved.<br>kawaii logo: <a href="https://x.com/sawaratsuki1004">@sawaratuki</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
