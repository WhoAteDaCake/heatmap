const project = require('../config/project.config.js');

const express = require('express');
const path = require('path');
const fs = require('fs');
const debug = require('debug')('server:main');
const webpack = require('webpack');
const devMiddleWare = require('webpack-dev-middleware');
const hotMiddleWare = require('webpack-hot-middleware');

const app = express();

function publicFile(res, file) {
  return res.sendFile(path.join(__dirname, '../public', file));
}

if (project.globals.DEV) {
  const webpackConf = require('../config/webpack.config.js');
  const compiler = webpack(webpackConf);

  app.use(devMiddleWare(compiler, {
    hot: true,
    publicPath: webpackConf.output.publicPath,
    reload: true,
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

app.get(/^.*\.((?!hot-update).)*\..*$/, (req, res) => publicFile(res, req.originalUrl));
app.get(/\/static/, (req, res) =>
  publicFile(res, req.originalUrl.replace('/static', '/'))
);
app.get('/bundle.js', (req, res) => publicFile(res, 'bundle.js'));
app.get('*', (req, res) => publicFile(res, 'index.html'));

app.listen(
  project.server.port,
  project.server.ip,
  () => debug(`http://${project.server.ip}:${project.server.port}`));
