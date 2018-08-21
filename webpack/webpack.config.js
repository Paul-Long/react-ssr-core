const path = require('path');

const root = path.resolve(__dirname, '../');
module.exports = {
  // JS 执行入口文件
  entry: path.resolve(root, 'src/client/render-browser.js'),
  mode: 'development',
  output: {
    filename: 'bundle_browser.js',
    path: path.resolve(root, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: path.resolve(root, 'node_modules'),
      },
      {
        test: /\.(less|css)/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
    ]
  },
  devtool: 'source-map' // 输出 source-map 方便直接调试 ES6 源码
};
