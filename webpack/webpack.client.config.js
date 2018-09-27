const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const antTheme = require('./ant');

const root = path.resolve(__dirname, '../');
const client = path.resolve(root, 'src/client/');
const env = process.env.NODE_ENV;

const config = {
  entry: {
    'bundle_browser': path.resolve(client, 'render-browser.js')
  },
  output: {
    filename: '[name].js',
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
  externals: {
    'echarts': 'echarts',
    'react': 'React',
    'react-dom': 'ReactDOM',
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
    new ExtractTextPlugin({filename: 'app.css', allChunks: true}),
    new webpack.HashedModuleIdsPlugin(),
  ]
};
config.mode = env;
if (env === 'development') {
  config.devtool = 'source-map';
  // config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

if (env === 'production') {
  config.optimization = {
    minimize: true,
    noEmitOnErrors: true,
    concatenateModules: true
  };
  // const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  // config.plugins.push(new BundleAnalyzerPlugin());
}
module.exports = config;
