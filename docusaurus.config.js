// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

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
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            /* These pages were removed so redirect to the most similar one*/
            from: ['/types-of-feeds/pull/delta-feeds', '/types-of-feeds/pull/feed', '/types-of-feeds/pull/scraping', '/types-of-feeds/push/message', '/types-of-feeds/push/rest'],
            to: '/feeds'
          },          
          {
            from: '/examples/offer/minimal',
            to: '/feeds/offer/formats/prisjakt_xml/#minimal'
          },
          {
            from: '/examples/offer/all',
            to: '/feeds/offer/formats/prisjakt_xml/#full'
          },
          {
            from: '/examples/promotion/promotion-minimal',
            to: '/feeds/promotion/formats/prisjakt_promotion_xml/#minimal'
          },
          {
            from: '/examples/promotion/promotion-all',
            to: '/feeds/promotion/formats/prisjakt_promotion_xml/#full'
          },
          {
            from: '/terminology',
            to: '/reference'
          },
          {
            from: '/terminology/terms',
            to: '/reference/terminology'
          },
          {
            from: '/terminology/severity-levels',
            to: '/reference/validation-severity-levels'
          },
          {
            from: '/terminology/prisjakt-specific-fields',
            to: '/feeds/offer/formats/prisjakt_xml/#prisjakt-specific-fields'
          },
          {
            from: '/terminology/required-vs-optional',
            to: '/policies/required-vs-optional'
          },
          {
            from: '/general-exceptions',
            to: '/reference/general-exceptions'
          },
          {
            from: '/types-of-feeds/pull/file-formats/xml',
            to: '/advanced/xml'
          },
          {
            from: '/types-of-feeds/pull/file-formats/csv',
            to: '/advanced/csv'
          },       
          {
            from: '/infrastructure/auto-disabled-feeds',
            to: '/policies/auto-disabling-feeds'
          },
          {
            from: '/deprecation-policy',
            to: '/policies/deprecation-policy'
          },
          {
            from: '/advanced/encoding/file-encoding',
            to: '/advanced/file-encoding'
          },
          {
            from: '/advanced/encoding/url-encode',
            to: '/advanced/url-encode'
          },
          {
            from: '/advanced/encoding/cdata',
            to: '/advanced/xml/cdata'
          },
          {
            from: '/advanced/encoding/xml-escaping',
            to: '/advanced/xml/xml-escaping'
          },
          {
            from: '/advanced/escaping/escape-csv',
            to: '/advanced/csv/escaping-data'
          }
        ],
        createRedirects(existingPath) {
          /*
          * The way this plugin works is that it generates some additional pages (not visible to end user)
          * required to do redirects. These pages have to be located under paths that were moved.
          * That’s why this opposite statement is here -> we are duplicating /feeds/offer/fields/<field_name> (new structure)
          * to be available also under /fields/<field_name>
          * https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects
          * */
          const FIELDS_REDIRECTS_PATH = '/feeds/offer/fields'
          // We want to redirect from /docs/fields/<offer_feed_field_name> to /docs/feeds/offer/fields/<field_name>
          if (existingPath.startsWith(FIELDS_REDIRECTS_PATH)) {
            return existingPath.replace(FIELDS_REDIRECTS_PATH, '/fields');
          }

          return undefined; // No redirect
        },
      },
    ],
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
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Prisjakt/feed-specification/tree/master/',
        },
        blog: false, // Optional: disable the blog plugin
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-9M1JWJLRQL',
          anonymizeIP: true,
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
        copyright: `© 2000-${new Date().getFullYear()} PriceSpy UK. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp', 'rust', 'java']
      },
    }),
};

module.exports = config;
