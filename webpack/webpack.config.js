const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const root = path.resolve(__dirname, '../');
const client = path.resolve(root, 'src/client/');
module.exports = {
  // JS 执行入口文件
  entry: path.resolve(client, 'render-browser.js'),
  mode: 'development',
  output: {
    filename: 'bundle_browser.js',
    path: path.resolve(root, 'dist'),
  },
  resolve: {
    alias: {
      '@containers': path.resolve(client, 'containers'),
      '@components': path.resolve(client, 'components'),
      '@utils': path.resolve(client, 'utils'),
      '@models': path.resolve(client, 'models'),
      '@constants': path.resolve(client, 'constants'),
      '@actions': path.resolve(client, 'actions'),
      '@caches': path.resolve(client, 'caches'),
    }
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'less-loader']
        }),
      },
    ]
  },
  devtool: 'source-map', // 输出 source-map 方便直接调试 ES6 源码
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
};
