// @flow
import R from 'ramda';

/**
 * Will filter array of objects if given value of given key contains a string
 */
export function filterByKey(req: string, key: string, arr: Array<Object>): Array<Object> {
  const contains = R.compose(R.contains(R.toUpper(req)), R.toUpper, R.propOr('', key));
  return R.filter(contains)(arr);
}
