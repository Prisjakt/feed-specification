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
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "apiDocs",
        docsPluginId: "classic",
        // See: https://github.com/PaloAltoNetworks/docusaurus-openapi-docs#config
        config: {
          petstore: { // Note: petstore key is treated as the <id> and can be used to specify an API doc instance when using CLI commands
            specPath: "feed-api.yml", // Path to designated spec file
            outputDir: "docs/api", // Output directory for generated .mdx docs
            baseUrl: "https://api.schibsted.com/prisjakt/feed-api",
            hideSendButton: false,
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
        }
      },
    ]
  ],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid', 'docusaurus-theme-openapi-docs'],

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
          //docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi-docs
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
        copyright: `© 2000-2022 PriceSpy UK. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp', 'rust', 'java']
      },
    }),
};

module.exports = config;
