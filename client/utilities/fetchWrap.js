import axios from 'axios';

import till from './till';

const baseURL = `${process.env.IR_BACKEND_BASE_URI}/v1`;
// NOTES add error handling
/**
 * Wraps the http request
 * @param {object} cfg
 */
export default async function fetchWrap(cfg) {
	const config = Object.assign(cfg, { baseURL });
	const { error, resp } = await till(axios(config));
	if (process.env.NODE_ENV === 'development' && error) {
		console.error(error);
	}
	return {
		error,
		resp: resp.data,
	};
}