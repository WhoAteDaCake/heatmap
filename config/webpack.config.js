const project = require('./project.config.js');

const path = require('path');
const debug = require('debug')('webpack:main');
const webpack = require('webpack');
const BabiliPlugin = require("babili-webpack-plugin");

const { PROD, DEV } = project.globals;
const { app: appDir } = project.path;

function alias(arr) {
  const alt = {};
  arr.map(val => (alt[val] = path.resolve(appDir,val)))
  return alt;
}

/*  Main */
const webpackConfig = {
  entry: [
    project.app.entry,
  ],
  output: {
    path: project.path.out,
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
      rules: [{
        test: /\.js$/,
        include: project.path.app,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'eslint-loader' },
        ],
      }],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        HOST: JSON.stringify(process.env.HOST),
      },
    }),
  ],
  devtool: DEV ? 'source-map' : false,
  resolve: {
    modules: ["src", "node_modules"],
    alias: {}
  }
};
/*  Hot-loader */
if (DEV) {
  debug('Adding webpack-hot-middleware');
  webpackConfig.entry.unshift('webpack-hot-middleware/client');
}
/* Babili */
if (PROD) {
  debug('Adding babili to minify')
  webpackConfig.plugins.push(new BabiliPlugin());
}
/* Alias list */
debug('Adding alias')
webpackConfig.resolve.alias = alias([
  'actions',
  'constants',
  'components',
  'containers',
  'helpers',
  'reducers',
  'routes',
  'store',
]);
module.exports = webpackConfig;
