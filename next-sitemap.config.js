/** @type {import('next-sitemap').INextSitemapConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://finecheck.co.uk',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './public',
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/', '/appeal/success'] },
    ],
    additionalSitemaps: [],
  },
  exclude: ['/api/*', '/appeal/success'],
};
