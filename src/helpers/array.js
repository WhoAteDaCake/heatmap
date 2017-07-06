// @flow
import R from 'ramda';

/**
 * Will filter array of objects if given value of given key contains a string
 */
export function filterByKey(
  req: string,
  key: string,
  fn: Function
): Function {
  // $FlowIgnore does not have definition yet
  const containsWord = R.useWith(R.contains, [R.toUpper])(req);
  const contains = R.propSatisfies(containsWord, key);
  return R.compose(R.map(fn), R.filter(contains));
}
