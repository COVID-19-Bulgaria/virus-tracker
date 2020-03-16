const { exec } = require('child_process');

// exec('node ./node_modules/repng/cli.js ./components/open_graph/CasesLineChartImage.js -w 1200 -h 630 -d ./public/static/images/ -f open_graph_index.png --puppeteer {\"headless\":false}');
exec('node ./node_modules/repng/cli.js ./components/open_graph/MapImage.js -w 1200 -h 630 -d ./public/static/images/ -f open_graph_map.png');
