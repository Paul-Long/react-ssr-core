const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const root = path.resolve(__dirname, '../');
const client = path.resolve(root, 'src/client/');
const env = process.env.NODE_ENV;

const config = {
  entry: path.resolve(root, 'src/client/render-server.js'),
  target: 'node',
  externals: [nodeExternals()],
  output: {
    libraryTarget: 'commonjs2',
    filename: 'bundle_server.js',
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
        test: /\.(css|less)/,
        use: ['ignore-loader'],
      },
    ]
  },
  devtool: 'source-map',
  plugins: [],
};

config.mode = env;

if (env === 'development') {
  config.devtool = 'source-map';
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

if (env === 'production') {

}
module.exports = config;
