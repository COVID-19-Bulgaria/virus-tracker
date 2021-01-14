const pathConfig = {
  '/': {
    loc: '/',
    priority: '1.0',
    changefreq: 'hourly',
  },
  '/map': {
    loc: '/интерактивна-карта',
    priority: '0.8',
    changefreq: 'daily',
  },
  '/what-we-know': {
    loc: '/какво-знаем-за-коронавируса',
    priority: '0.7',
    changefreq: 'weekly',
  },
  '/why-stay-home': {
    loc: '/социално-дистанциране',
    priority: '0.7',
    changefreq: 'weekly',
  },
  '/about': {
    loc: '/за-проекта',
    priority: '0.7',
    changefreq: 'weekly',
  },
  '/privacy': {
    loc: '/поверителност',
    priority: '0.7',
    changefreq: 'weekly',
  },
  '/en': {
    loc: '/en',
    priority: '1.0',
    changefreq: 'hourly',
  },
  '/en/map': {
    loc: '/en/map',
    priority: '0.8',
    changefreq: 'daily',
  },
};

module.exports = {
  siteUrl: 'https://coronavirus-bulgaria.org',
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: [
    '/open-graph-linechart',
    '/en/open-graph-linechart',
    '/open-graph-map',
    '/en/open-graph-map',
  ],
  // Default transformation function
  transform: (config, path) => {
    const pathProperties = pathConfig[path] || { loc: path, ...config };

    return {
      loc: pathProperties.loc, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: pathProperties.changefreq,
      priority: pathProperties.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://coronavirus-bulgaria.org/image-sitemap.xml',
    ],
  },
};
