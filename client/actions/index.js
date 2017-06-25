import * as types from 'config/actionTypes';

export function addLike(dispatch) {
	return () => {
		dispatch({ type: types.USER_ADD, likes: 1 });
	};
}