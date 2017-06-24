const project = require('../config/project.config.js');
const webpackConf = require('../config/webpack.config.js');

const express = require('express');
const path = require('path');
const fs = require('fs');
const debug = require('debug')('server');
const handlebars = require('handlebars');
const webpack = require('webpack');
const devMiddleWare = require('webpack-dev-middleware');
const hotMiddleWare = require('webpack-hot-middleware');

const app = express();
const DEV = project.globals.DEV;

const scripts = DEV
	? [{ script: `http://${project.server.ip}::35729/livereload.js?snipver=1` }]
		: [];
if (DEV) {
	const compiler = webpack(webpackConf);
	app.use(devMiddleWare(compiler, {
		hot: true,
		publicPath: webpackConf.output.publicPath,
		// reload: true,
		noInfo: true,
		stats: {
			colors: true,
		},
	}));
	app.use(hotMiddleWare(compiler));

	app.use((req, res, next) => {
		req.originalUrl = req.originalUrl.replace(/\?.*/, '');
		debug('File request: %s', req.originalUrl);
		next();
	});
}
app.get(/^.*\.((?!hot-update).)*\..*$/, (req, res) =>
	res.sendFile(path.join(__dirname, '../public', req.originalUrl)));
app.get('*', (req, res) => {
	const file = fs.readFileSync(
		path.join(__dirname, 'index.html'));
	const text = file.toString('utf-8');
	const html = handlebars.compile(text)({ scripts });
	res.send(html);
});
app.listen(
    project.server.port,
    project.server.ip,
    () => debug(`${project.server.ip} on port %d`, project.server.port));