import { combineReducers } from 'redux';
import applyReducer from 'helpers/applyReducer';

import user from './user';
import sidebar from './sidebar';

/*  Bind reducers here */
const reducers = Object.assign({},
  applyReducer(user),
  applyReducer(sidebar),
);

export default combineReducers(reducers);
