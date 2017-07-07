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
  const findWord = R.useWith(R.contains, [R.toUpper, R.toUpper])(req);
  const propContains = R.propSatisfies(findWord, key);
  return R.compose(R.map(fn), R.filter(propContains));
}
