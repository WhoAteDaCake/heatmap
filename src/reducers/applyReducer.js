// @flow

/**
 * Will check if an object contains given key
 */
function keyExists(error: string): (object: Object, key: string) => void {
  return (object, key) => {
    if (typeof object[key] === 'undefined') {
      throw Error(`${error} ${key} undefined`);
    }
  };
}
/**
 * Creates a reducer middleware
 * Takes action containing type
 */
function createReducer(cases: Array<Function>, initialState = {}) {
  return (state = initialState, action) => {
    if (!(action.type in cases)) {
      return state;
    }
    return cases[action.type](state, action);
  };
}
/**
 * Returns fixated reducer
 * @param {object} reducer
 * @return {object}
 */
function applyReducer(reducer: Object) {
  const checker = keyExists(`In applyReducer reducer: ${JSON.stringify(reducer)}`);

  checker(reducer, 'key');
  checker(reducer, 'cases');
  return {
    [reducer.key]: createReducer(reducer.cases, reducer.initialState),
  };
}

export default applyReducer;
