module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
    [
      '@fullhuman/postcss-purgecss',
      {
        content: [
          './pages_/**/*.{js,jsx,ts,tsx}',
          './components/**/*.{js,jsx,ts,tsx}',
        ],
        safelist: {
          deep: [
            /alert/,
            /row/,
            /col/,
            /container/,
            /accordion/,
            /card/,
            /badge/,
            /tooltip/,
            /nav/,
            /navbar/,
            /spinner/,
            /figure/,
            /button/,
            /btn/,
            /text/,
            /bg/,
            /sidebar/,
            /img-fluid/,
            /rounded/,
          ],
        },
      },
    ],
  ],
};
