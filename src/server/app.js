const hook = require('css-modules-require-hook');
const lessParser = require('postcss-less').parse;
hook({
  generateScopedName: '[name]__[local]___[hash:base64:5]',
  extensions: '.less',
  processorOpts: { parser: lessParser },
});

require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif', 'webp'],
  limit: 8000,
});
const express = require('express');
const spa = require('./spa');
const app = express();

app.use(express.static('.'));
app.get('/*', spa);

module.exports = app;
