const path = require('path');
const nodeExternals = require('webpack-node-externals');

const root = path.resolve(__dirname, '../');
const client = path.resolve(root, 'src/client/');
module.exports = {
  // JS 执行入口文件
  entry: path.resolve(root, 'src/client/render-server.js'),
  // 为了不打包进 Nodejs 内置的模块，例如 fs net 模块等
  target: 'node',
  mode: 'development',
  // 为了不打包进 node_modules 目录下的第三方模块
  externals: [nodeExternals()],
  output: {
    // 为了以 CommonJS2 规范导出渲染函数，以给采用 Nodejs 编写的 HTTP 服务调用
    libraryTarget: 'commonjs2',
    // 把最终可在 Nodejs 中运行的代码输出到一个 bundle.js 文件
    filename: 'bundle_server.js',
    // 输出文件都放到 dist 目录下
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
        // CSS 代码不能被打包进用于服务端的代码中去，忽略掉 CSS 文件
        test: /\.(css|less)/,
        use: ['ignore-loader'],
      },
    ]
  },
  devtool: 'source-map' // 输出 source-map 方便直接调试 ES6 源码
};
