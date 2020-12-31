const sitemap = require('nextjs-sitemap-generator');
const path = require('path');

sitemap({
  alternateUrls: {
    bg: 'https://coronavirus-bulgaria.org',
    en: 'https://coronavirus-bulgaria.org/en',
  },
  baseUrl: 'https://coronavirus-bulgaria.org',
  pagesDirectory: path.join(__dirname, 'pages'),
  targetDirectory: 'public/',
  pagesConfig: {
    '': {
      priority: '1.0',
      changefreq: 'hourly',
    },
    '/map': {
      priority: '0.8',
      changefreq: 'daily',
    },
    '/what-we-know': {
      priority: '0.5',
      changefreq: 'weekly',
    },
    '/why-stay-home': {
      priority: '0.7',
      changefreq: 'weekly',
    },
    '/about': {
      priority: '0.5',
      changefreq: 'weekly',
    },
    '/privacy': {
      priority: '0.0',
      changefreq: 'weekly',
    },
  },
  ignoredPaths: ['open-graph-linechart', 'open-graph-map'],
  ignoreIndexFiles: true,
});
