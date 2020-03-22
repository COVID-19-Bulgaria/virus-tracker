const webpack = require('webpack');

module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/privacy': { page: '/privacy' },
    '/map': { page: '/map' },
    '/what-we-know': { page: '/what-we-know' },
    '/about': { page: '/about' },
    '/why-stay-home': { page: '/why-stay-home' },
  }),
  exportTrailingSlash: true,
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

    return config;
  },
  devIndicators: {
    autoPrerender: false,
  },
};
