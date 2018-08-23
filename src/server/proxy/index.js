const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use('/api', proxy({
    target: 'http://172.16.66.181:5100',
    changeOrigin: true
  }));
};