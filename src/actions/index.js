import * as types from 'constants/actionTypes';

export function addLike(dispatch) {
  return () => {
    dispatch({ type: types.USER_ADD, likes: 1 });
  };
}