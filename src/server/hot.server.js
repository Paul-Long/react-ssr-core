const express = require('express');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const compiler = webpack(require('../../webpack/webpack.server.config.js'));
const app = express();

app.use(middleware(compiler, { writeToDisk: true }));

app.listen(3102, () => console.log('hot client app listening on port 3102!'));