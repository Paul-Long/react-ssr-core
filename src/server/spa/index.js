const render = require('../../../dist/bundle_server');
const log = require('log4js');
const logger = log.getLogger('spa');

module.exports = function (req, res, next) {
  const url = req.originalUrl || req.url;
  if (url.startsWith('/api/')) {
    return next();
  }
  const start = new Date().getTime();
  const content = render(url);
  logger.debug(`spa route [${url}] render time = [${(new Date().getTime()) - start}ms]`);
  res.send(`
<html>
  <meta charset="UTF-8">
  <link rel="icon" href="http://houym-1254119810.cossh.myqcloud.com/favicon.ico" type="image/x-icon">
  <link href="./dist/app.css" rel="stylesheet">
</head>
<body>
<div id="app">${content}</div>
<script src="./dist/echarts.min.js"></script>
<script src="./dist/bundle_browser.js"></script>
</body>
</html>
  `);
};
