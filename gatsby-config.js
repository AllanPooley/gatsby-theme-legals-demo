require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const {
  IS_STAGING,
  PRISMIC_REPO_NAME,
  PRISMIC_API_KEY,
} = process.env;

const website = require('./config/website');

const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix;

module.exports = {
  /* General Information */
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: website.title,
    titleAlt: website.titleAlt,
    description: website.description,
    banner: website.logo,
    headline: website.headline,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook,
    blogSlug: website.blogSlug,
    categorySlug: website.categorySlug,
  },
  /* Plugins */
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ['/thank-you/'],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: '/sitemap.xml',
        policy: IS_STAGING ? (
          [{ userAgent: '*', disallow: '/' }]
        ) : (
          [{ userAgent: '*', allow: '/', disallow: ['/thank-you/'] }]
        ),
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: website.url,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: '@import "resources.scss";',
        includePaths: [
          'src/sass/base',
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: '@littleplusbig/gatsby-theme-legals-prismic',
      options: {
        prismicRepositoryName: PRISMIC_REPO_NAME,
        prismicAccessToken: PRISMIC_API_KEY,
        siteName: website.title,
      },
    },
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-lodash',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: website.title,
        short_name: website.titleAlt,
        description: website.description,
        start_url: pathPrefix,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: 'standalone',
        icon: website.favicon,
      },
    },
    // Must be placed at the end
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
};
