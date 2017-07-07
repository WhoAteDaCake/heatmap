// @flow
import axios from 'axios';
import createDebug from 'helpers/debug';

const { BASE_URI } = process.env;
const baseURL = BASE_URI || 'http://localhost';
const debug = createDebug('fetch:wrap');

type FetchResp = {
  error: ?Object,
  resp: ?Object,
};
type ReqPromise = Promise<FetchResp>;
/**
 * Wraps a promise so no try/catch is required
 */
const till = (p: Promise<*>): ReqPromise =>
  p.then(resp => ({ error: null, resp }))
  .catch(error => ({ error, resp: null }));

/**
 * Wraps the axios requests so custom back-end url can be used across requests
 */
export default async function fetchWrap(cfg: Object): ReqPromise {
  const config = Object.assign(cfg, { baseURL });
  const { error, resp } = await till(axios(config));
  if (error) {
    debug(error);
  }
  return {
    error,
    resp: resp ? resp.data : resp,
  };
}
