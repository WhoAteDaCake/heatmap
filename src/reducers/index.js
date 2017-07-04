import { combineReducers } from 'redux';
import applyReducer from 'helpers/applyReducer';

import user from './user';

/*  Bind reducers here */
const reducers = Object.assign({},
  applyReducer(user),
);

export default combineReducers(reducers);