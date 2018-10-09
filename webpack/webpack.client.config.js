const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');
const os = require('os');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const antTheme = require('./ant');

const root = path.resolve(__dirname, '../');
const client = path.resolve(root, 'src/client/');
const env = process.env.NODE_ENV;
const happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length});

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
      '@fetch': path.resolve(client, 'utils/fetch.js'),
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
        use: ['happypack/loader?id=babel'],
        exclude: /node_modules/,
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
    new CaseSensitivePathsPlugin(),
    new ExtractTextPlugin({filename: 'app.css', allChunks: true}),
    new webpack.HashedModuleIdsPlugin(),
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
config.optimization = {
  splitChunks: {
    cacheGroups: {
      // 处理入口chunk
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        chunks: 'initial',
        name: 'vendors',
      },
      // 处理异步chunk
      'async-vendors': {
        test: /[\\/]node_modules[\\/]/,
        minChunks: 2,
        chunks: 'async',
        name: 'async-vendors'
      }
    }
  }
};
if (env === 'development') {
  config.devtool = 'source-map';
  // config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

if (env === 'production') {
  config.optimization.minimize = true;
  config.optimization.noEmitOnErrors = true;
  config.optimization.concatenateModules = true;
  // const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  // config.plugins.push(new BundleAnalyzerPlugin());
}
module.exports = config;
