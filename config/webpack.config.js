const project = require('./project.config.js');

const path = require('path');
const debug = require('debug')('webpack');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');

const { PROD, DEV } = project.globals;
const { app: appDir } = project.path;
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
      rules: [],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
			},
		}),
  ],
	devtool: DEV ? 'source-map' : false,
  resolve: {
    alias: {
      components: path.resolve(appDir,'components'),
      config: path.resolve(appDir,'config'),
      actions: path.resolve(appDir,'actions'),
      reducers: path.resolve(appDir,'reducers'),
      actions: path.resolve(appDir,'actions'),
      utilities: path.resolve(appDir,'utilities'),
    }
  }
};
console.log(path.join(appDir,'actions'));
/*  Babel */
debug('Adding babel loader');
const babelConfig = {
  test: /\.js$/,
  include: project.path.app,
  exclude: /node_modules/,
  use: [{ loader: 'babel-loader' }],
};
webpackConfig.module.rules.push(babelConfig);
/*	Hot-loader */
if (DEV) {
	debug('Adding webpack-hot-middleware');
	webpackConfig.entry.unshift('webpack-hot-middleware/client');
}
// /*  Sass */
// const extractSass = new ExtractTextPlugin({
//   filename: 'mai.css',
//   disable: project.globals.DEV,
//   allChunks: true
// });

// webpackConfig.module.rules.push({
//   test: [/\.scss$/,/\.css$/],
//   use: extractSass.extract({
//     use: [
//       { loader: 'css-loader'},
//       { loader: 'sass-loader'}
//     ],
//     fallback: 'style-loader' // use style-loader in development
//   })
// });

// if(PROD) {
//   debug('Extracting css to external file');
//     webpackConfig.plugins.push(
//         extractSass
//     );
// }
module.exports = webpackConfig;