module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Gatsby Theme Legals Prismic Demo', // Navigation and Site Title
  titleAlt: 'Gatsby Theme Legals Prismic Demo', // Title for JSONLD
  description: '',
  headline: 'Gatsby Theme for adding polished, responsive legal pages.', // Headline for schema.org JSONLD
  url: 'https://gatsby-theme-legals.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.jpg', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Gatsby Theme Legals', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Little & Big', // Author for schemaORGJSONLD
  themeColor: '#5B2589',
  backgroundColor: '#FCFAFF',

  twitter: '@littleplusbig', // Twitter Username
  facebook: 'littleandbigstudio', // Facebook Site Name

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
};
