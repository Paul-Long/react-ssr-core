const path = require('path');

const root = path.resolve(__dirname, '../');
const client = path.resolve(root, 'src/client/');
const env = process.env.NODE_ENV;

const config = {
  entry: path.resolve(client, 'components/echarts/index.js'),
  output: {
    filename: 'echarts.min.js',
    path: path.resolve(root, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: path.resolve(root, 'node_modules'),
      },
    ]
  },
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
}
module.exports = config;
