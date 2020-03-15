module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/privacy': { page: '/privacy' },
    '/map': { page: '/map' },
    '/about': { page: '/about' },
  }),
  exportTrailingSlash: true,
  target: 'serverless',
  seo: {
    title: 'COVID-19 България',
  },
};
