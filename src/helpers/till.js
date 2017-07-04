/**
 * Wraps a promise so no try/catch is required
 * @param {Promise} p
 * @return {Promise}
 */
function till(p) {
  return p
    .then(resp => ({ error: null, resp }))
    .catch(error => ({ error, resp: null }));
}
export default till;
