const puppeteer = require('puppeteer');

const takeScreenshot = async ({
  url,
  width,
  height,
  path,
}) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width, height });
  await page.goto(url, {
    waitUntil: 'networkidle2',
  });

  await page.screenshot({
    type: 'png',
    clip: {
      x: 0,
      y: 0,
      width,
      height,
    },
    path,
  });

  await browser.close();
};

takeScreenshot({
  url: 'http://localhost:3000/open-graph-linechart',
  width: 1200,
  height: 630,
  path: './public/static/images/open_graph_linechart.png',
});

takeScreenshot({
  url: 'http://localhost:3000/open-graph-map',
  width: 1200,
  height: 630,
  path: './public/static/images/open_graph_map.png',
});
