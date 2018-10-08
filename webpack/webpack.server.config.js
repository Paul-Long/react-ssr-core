const path = require('path');
const nodeExternals = require('webpack-node-externals');

const root = path.resolve(__dirname, '../');
const client = path.resolve(root, 'src/client/');
const env = process.env.NODE_ENV;

const config = {
  entry: path.resolve(root, 'src/client/render-server.js'),
  target: 'node',
  externals: [nodeExternals({
    whitelist: [
      'fast-table',
      'react-router',
      'react-router-dom',
      'react-redux',
      'react-router-bundle',
      'redux',
      'redux-saga',
      'prop-types',
      'classnames',
      'antd',
      'decimal.js-light',
      'echarts',
      'moment',
      'history',
      'invariant',
      'isomorphic-fetch',
    ]
  })],
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
      '@routes': path.resolve(client, 'routes'),
      '@async': path.resolve(client, 'routes/async/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|less)/,
        use: ['ignore-loader'],
      },
    ]
  },
  plugins: [],
};

config.mode = env;

if (env === 'development') {
  config.devtool = 'source-map';
}

if (env === 'production') {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  config.plugins.push(new BundleAnalyzerPlugin());
}
module.exports = config;
