import * as types from '../config/actionTypes';

function add(state, action) {
	return Object.assign(state, {
		likes: state.likes + action.likes,
	});
}

export default {
	key: 'user',
	cases: {
		[types.USER_ADD]: add,
	},
	initialState: {
		token: 'fakeToken',
		likes: 0,
	},
};