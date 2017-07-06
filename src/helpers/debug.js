// @flow

/**
 * Adds a debuger type to localStorage
 */
function debugToStorage(name: string) {
  const item: ?string = localStorage.getItem('debug');
  const debug = typeof item !== 'string' ? '' : item;

  if (debug.includes(name)) {
    return;
  }
  localStorage.setItem('debug', `${debug}${name},`);
}

/**
 * Creates a debuger for logging
 * Should be used instead of console.log
 */
export default function createDebug(name: string): Function {
  if (process.env.NODE_ENV === 'development') {
    const debug = require('debug');
    debugToStorage(name);
    return debug(name);
  }
  // Could possible change this to a function that send error logs to back-end
  return () => ({});
}
