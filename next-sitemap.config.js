/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://yourdomain.com/",  // Update this
    generateRobotsTxt: true,  // Generates robots.txt file
    sitemapSize: 5000,        // Default max links per sitemap
    outDir: "out",            // Ensures the sitemap is saved in the exported site
  };
  