// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Prisjakt Feed Specification',
  tagline: 'The devil is in the details',
  url: 'https://prisjakt.nu',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'prisjakt', // Usually your GitHub org/user name.
  projectName: 'feed-specification', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sv'],
  },

  plugins: [require.resolve('docusaurus-lunr-search')],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
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
        title: 'Feed Specification',
        style: 'dark',
        logo: {
          alt: 'Prisjakt Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          { to: '/', label: 'Changelog', position: 'left' },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/prisjakt/feed-specification',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Konsument',
            items: [
              {
                label: 'Kom igång med Prisjakt',
                to: 'https://www.prisjakt.nu/info/kom-igang-med-prisjakt--ipYmjxdxAAAJ-41end',
              },
              {
                label: 'Hur Prisjakt fungerar',
                to: 'https://www.prisjakt.nu/info/transparenslofte-hur-prisjakt-fungerar--ipYmegTRAAACIAz9Bd',
              },
              {
                label: 'Artiklar',
                to: 'https://www.prisjakt.nu/artiklar',
              },
              {
                label: 'Prisjakts experter',
                to: 'https://www.prisjakt.nu/experter',
              },
              {
                label: 'Teman & kampanjer',
                to: 'https://www.prisjakt.nu/tema',
              },
              {
                label: 'Black Friday 2022',
                to: 'https://www.prisjakt.nu/tema/black-friday',
              },
              {
                label: 'Årets butik',
                to: 'https://www.prisjakt.nu/arets-butik',
              },
              {
                label: 'Kategorier A-Ö',
                to: 'https://www.prisjakt.nu/kategorier',
              }
            ],
          },
          {
            title: 'Butik',
            items: [
              {
                label: 'Varför Prisjakt?',
                href: 'https://www.prisjakt.nu/info/prisjakt-for-butiker--ipYmeZLhAAACIAz67W',
              },
              {
                label: 'Lägg till och profilera din butik',
                href: 'https://www.prisjakt.nu/info/lagg-till-och-profilera-din-butik--ipYmeecBAAAJ-4z8d-',
              },
              {
                label: 'Annonsera på Prisjakt',
                href: 'https://se-prisjakt.ocast.com/se/',
              },
              {
                label: 'Årets butik – för butiker',
                href: 'https://www.prisjakt.nu/info/arets-butik-for-butiker--ipYme75hAAACIA0FT7',
              },
              {
                label: 'Login för butiker',
                href: 'https://business.prisjakt.nu/',
              },
            ],
          },
          {
            title: 'Om oss',
            items: [
              {
                label: 'Om Prisjakt',
                to: 'https://www.prisjakt.nu/info/om-prisjakt--i9',
              },
              {
                label: 'Hjälpcenter',
                href: 'https://support.prisjakt.nu/sv/',
              },
              {
                label: 'Kontakt',
                href: 'https://www.prisjakt.nu/info/kontakta-oss--ipYmes2hAAACEA0Axz',
              },
              {
                label: 'Jobba hos oss',
                href: 'https://prisjakt.teamtailor.com/',
              },
              {
                label: 'Nyhetsrum',
                href: 'https://nyhetsrum.prisjakt.nu/',
              },
              {
                label: 'Friskrivning och ansvarsbegränsning',
                href: 'https://www.prisjakt.nu/info/friskrivning-och-ansvarsbegransning--ipYmj2kRAAACEA1gH9',
              },
              {
                label: 'Personuppgiftspolicy',
                href: 'https://www.prisjakt.nu/info/personuppgiftspolicy--ipYmj1sRAAACEA1f2w',
              },
              {
                label: 'Cookiepolicy',
                href: 'https://www.prisjakt.nu/info/cookiepolicy--ipYmj0eBAAACIA1fgC',
              },
              {
                label: 'Login för experter',
                href: 'http://expert.prisjakt.nu/login',
              },
            ],
          },
        ],
        copyright: `Prisjakt Sverige AB är en del av Schibsted. Schibsted är ansvarig för din data på denna webbsajt. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
