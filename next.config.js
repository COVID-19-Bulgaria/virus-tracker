const webpack = require('webpack');

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
  webpack: (config, options) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.BUILD_ID': JSON.stringify(options.buildId),
      }),
    );

    return config;
  },
};
