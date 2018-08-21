const render = require('../../../dist/bundle_server');
module.exports = function (req, res, next) {
  const url = req.originalUrl || req.url;
  if (url.startsWith('/api/')) {
    return next();
  }
  res.send(`
<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
<div id="app">${render()}</div>
<script src="./dist/bundle_browser.js"></script>
</body>
</html>
  `);
};
