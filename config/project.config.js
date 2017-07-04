const path = require('path');
const ip = require('ip');
/*
 * Utilities
 */
function base(dirs, home = [__dirname, '..']) {
  return path.join(...home, ...dirs);
}

/*
 * Project configuration
 */
const config = {};
/*
 * Environment configuration
 */
const NODE_ENV = process.env.NODE_ENV || 'development';
const DEV = NODE_ENV === 'development';
const PROD = NODE_ENV === 'production';
const TEST = NODE_ENV === 'test';

config.globals = { NODE_ENV, DEV, PROD, TEST };
/*
 * Path configuration
 */
const pathConf = {
  app: base(['src']),
  server: base(['server']),
  out: base(['public']),
  base: base(['']),
};
config.path = pathConf;
/*
 * Server configuration
 */
const server = {
  ip: (DEV) ? 'localhost' : ip.address(),
  port: 3333,
};

if (process.env.PORT) {
  server.port = process.env.PORT;
} else if (PROD) {
  server.port = 8080;
}
config.server = server;

/*
 * App configuration
 */
const app = {
  entry: base(['index.js'], [config.path.app]),
};
config.app = app;

module.exports = config;
