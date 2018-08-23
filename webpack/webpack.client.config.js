const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const antTheme = require('./ant');

const root = path.resolve(__dirname, '../');
const client = path.resolve(root, 'src/client/');
const env = process.env.NODE_ENV;

const config = {
  entry: path.resolve(client, 'render-browser.js'),
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
          use: [
            'css-loader', 'postcss-loader',
            'less-loader',
            {
              loader: 'less-loader',
              options: {
                modifyVars: antTheme,
              }
            }
          ]
        }),
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
  ]
};
config.mode = env;
if (env === 'development') {
  config.devtool = 'source-map';
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

if (env === 'production') {

}
module.exports = config;
