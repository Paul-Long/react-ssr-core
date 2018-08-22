const render = require('../../../dist/bundle_server');
const log = require('log4js');
const logger = log.getLogger('spa');

module.exports = function (req, res, next) {
  const url = req.originalUrl || req.url;
  if (url.startsWith('/api/')) {
    return next();
  }
  logger.info('spa path %s', url);
  res.send(`
<html>
<link>
  <meta charset="UTF-8">
  <link href="./dist/app.css" rel="stylesheet">
</head>
<body>
<div id="app">${render(url)}</div>
<script src="./dist/bundle_browser.js"></script>
</body>
</html>
  `);
};
