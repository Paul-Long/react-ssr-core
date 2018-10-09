const render = require('../../../dist/bundle_server');
const log = require('log4js');
const logger = log.getLogger('spa');

function html({content, initialState}) {
  return (`
<html>
  <meta charset="UTF-8">
  <link rel="icon" href="http://houym-1254119810.cossh.myqcloud.com/favicon.ico" type="image/x-icon">
  <link href="./app.css" rel="stylesheet">
  <script src="./react.min.js"></script>
  <script src="./echarts.min.js"></script>
</head>
<body>
  <div id="app">${content}</div>
  <script>window.__INITIAL_STATE__ =${JSON.stringify(initialState)}</script>
  <script src="./vendors.js"></script>
  <script src="./async-vendors.js"></script>
  <script src="./bundle_browser.js"></script>
</body>
</html>
  `);
}

module.exports = async function (req, res, next) {
  const url = req.originalUrl || req.url;
  if (url.startsWith('/api/') || url.startsWith('/favicon.ico')) {
    return next();
  }
  const start = new Date().getTime();
  const {content, initialState} = await render({url, logger});
  logger.debug(`spa route [${url}] render time = [${(new Date().getTime()) - start}ms]`);
  res.send(html({content, initialState}));
};
