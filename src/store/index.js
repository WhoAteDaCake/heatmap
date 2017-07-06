// @flow
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const middleware = [thunk];

/**
 * Will get a specified item from localState
 */
function fromState(key: string): Object {
  const item: ?string = localStorage.getItem('store');
  return typeof item === 'string' ? JSON.parse(item) : {};
}

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger());
}
const STORE_KEY = 'store';
const initalState = fromState(STORE_KEY);

const store = createStore(
  reducer,
  initalState,
  applyMiddleware(...middleware));

export default store;

window.onbeforeunload = () => {
  const state = store.getState();
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
};
