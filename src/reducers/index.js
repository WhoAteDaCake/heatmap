import { combineReducers } from 'redux';
import applyReducer from './applyReducer';

import user from './user';
import sidebar from './sidebar';

/*  Bind reducers here */
const reducers = Object.assign({},
  applyReducer(user),
  applyReducer(sidebar),
);

export default combineReducers(reducers);
