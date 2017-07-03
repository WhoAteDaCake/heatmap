/**
 * Will check if an object contains given key
 * @param {string} error
 * @return {function}
 *   @param {object} object
 *   @param {string} key
 */
function checkKey(error) {
	return (object, key) => {
			if (typeof object[key] === 'undefined') {
				throw Error(`${error} ${key} undefined`);
			}
	};
}
/**
 * Creates a reducer middleware
 * Takes action containing type
 * @param {object} cases
 * @param {object} initialState
 * @return {function}
 *   @param {object} state
 *   @param {action} object
 *   @return {object}
 */
function createReducer(cases, initialState = {}) {
	return (state = initialState, action) => {
		if (typeof cases[action.type] === 'undefined') {
			return state;
		}
		return cases[action.type]({ ...state }, action);
	};
}
/**
 * Returns fixated reducer
 * @param {object} reducer
 * @return {object}
 */
function applyReducer(reducer) {
	const checker = checkKey(`In applyReducer reducer: ${JSON.stringify(reducer)}`);

	checkKey(reducer, 'key');
	checkKey(reducer, 'cases');
	return {
		[reducer.key]: createReducer(reducer.cases, reducer.initialState),
	};
}

export default applyReducer;