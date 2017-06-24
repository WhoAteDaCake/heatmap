import * as types from '../config/actionTypes';

function add(state, action) {
	return Object.assign(state, {
		loading: true,
	});
}

export default {
	key: 'user',
	cases: {
		[types.USER_ADD]: add,
	},
	initialState: {
		token: 'fakeToken',
		users: [],
		// data: {},
	},
};