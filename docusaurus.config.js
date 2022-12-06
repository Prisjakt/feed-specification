// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Prisjakt Feed Specification',
  tagline: 'The devil is in the details',
  url: 'https://schema.prisjakt.nu',
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
    locales: ['en'],
  },

  plugins: [
    require.resolve('docusaurus-lunr-search'),
    async function myPlugin(context, options) {
      // ...
      return {
        name: 'prisjakt-plugin',
        configureWebpack: function () {
          return {
            module: {
              rules: [
                {
                  test: /\.xml/,
                  type: 'asset/resource'
                }
              ]
            },
          };
        },
      };
    },
  ],
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
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Prisjakt/feed-specification/tree/master/',
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
            label: 'Start Here',
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
            title: 'Information',
            items: [
              {
                label: 'About PriceSpy',
                href: 'https://pricespy.co.uk/info/about-pricespy-pricespy-uk--i9',
              },
              {
                label: 'Register and feature your shop',
                href: 'https://pricespy.co.uk/info/register-and-feature-your-shop--i10',
              },
              {
                label: 'Contact – PriceSpy UK',
                href: 'https://pricespy.co.uk/info/contact-pricespy-uk--i8',
              },
              {
                label: 'Help Center',
                href: 'https://support.prisjakt.nu/en/',
              },
              {
                label: 'Login For Shops',
                href: 'https://business.prisjakt.nu/',
              },
              {
                label: 'Login For Experts',
                href: 'http://expert.prisjakt.nu/login',
              },
            ],
          },
          {
            title: 'Rules & Guidelines',
            items: [
              {
                label: 'Rules and guidelines for users',
                to: 'https://pricespy.co.uk/info/rules-and-guidelines-for-users--i4',
              },
              {
                label: 'Disclaimer',
                href: 'https://pricespy.co.uk/info/disclaimer--i14',
              },
              {
                label: 'Privacy policy',
                href: 'https://pricespy.co.uk/info/privacy-policy--i6',
              },
              {
                label: 'Cookie policy',
                href: 'https://pricespy.co.uk/info/cookie-policy--i7',
              },
              {
                label: 'Privacy settings',
                href: 'https://pricespy.co.uk/privacy-settings',
              },
            ],
          },
        ],
        copyright: `© 2000-2022 PriceSpy UK. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
