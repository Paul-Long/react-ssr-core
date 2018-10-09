const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const HappyPack = require('happypack');
const os = require('os');

const root = path.resolve(__dirname, '../');
const client = path.resolve(root, 'src/client/');
const env = process.env.NODE_ENV;
const happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length});

const config = {
  entry: path.resolve(root, 'src/client/render-server.js'),
  target: 'node',
  externals: [nodeExternals({
    whitelist: [
      'blueimp-md5',
      'classnames',
      'decimal.js-light',
      'fast-table',
      'invariant',
      'isomorphic-fetch',
      'moment',
      'prop-types',
      'react-router-bundle',
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
      '@fetch': path.resolve(client, 'utils/fetch.js'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['happypack/loader?id=babel'],
      },
      {
        test: /\.(css|less)/,
        use: ['ignore-loader'],
      },
    ]
  },
  plugins: [
    new HappyPack({
      id: 'babel',
      loaders: ['babel-loader'],
      threadPool: happyThreadPool,
      verbose: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
  ],
};

config.mode = env;

if (env === 'development') {
  config.devtool = 'source-map';
}

if (env === 'production') {
  // const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  // config.plugins.push(new BundleAnalyzerPlugin());
}
module.exports = config;
