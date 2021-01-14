const webpack = require('webpack');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  exportPathMap: async () => ({
    '/': { page: '/' },
    '/поверителност': { page: '/privacy' },
    '/интерактивна-карта': { page: '/map' },
    '/какво-знаем-за-коронавируса': { page: '/what-we-know' },
    '/за-проекта': { page: '/about' },
    '/социално-дистанциране': { page: '/why-stay-home' },
    '/en': { page: '/en' },
    '/en/privacy': { page: '/en/privacy' },
    '/en/map': { page: '/en/map' },
    '/en/what-we-know': { page: '/en/what-we-know' },
    '/en/about': { page: '/en/about' },
    '/en/why-stay-home': { page: '/en/why-stay-home' },
  }),
  trailingSlash: true,
  target: 'serverless',
  seo: {
    title: 'COVID-19 България',
  },
  webpack: (config, options) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.BUILD_ID': JSON.stringify(options.buildId),
      }),
    );

    const originalEntry = config.entry;
    // eslint-disable-next-line no-param-reassign
    config.entry = async () => {
      const entries = await originalEntry();

      if (
        entries['main.js']
        && !entries['main.js'].includes('./client/polyfills.js')
      ) {
        entries['main.js'].unshift('./client/polyfills.js');
      }

      return entries;
    };

    config.externals = [...config.externals, { moment: 'moment' }];

    return config;
  },
  devIndicators: {
    autoPrerender: false,
  },
});
