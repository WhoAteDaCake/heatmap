import { compose, replace, memoize } from 'ramda';

const colorRegExp = /rgb\((.*),(.*),(\s.*)\)/g;
const colorToObj = compose(JSON.parse, replace(colorRegExp, '[$1,$2,$3]'));
export default colorToObj;