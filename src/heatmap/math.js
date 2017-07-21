// @flow
// $FlowIgnore
import { find, propEq, both } from 'ramda';

type Point = Object;
type Points = Array<Point>

const P = 2.5;
const findPoint = (x: number, y: number) =>
  find(both(propEq('x', x), propEq('y', y)));

export function inverseDistance(points: Points, x: number, y: number): number {
  const point = findPoint(x, y)(points);
  if (typeof point !== 'undefined') {
    return point.value;
  }

  // Minus squared
  const mSQ = (v1, v2) => (v1 - v2) ** 2;
  const bottomEq = (x1, y1) =>
    (mSQ(x1, x) + mSQ(y1, y)) ** (P / 2);
  const loop = fn => points.reduce(fn, 0);

  const topRes = loop((count, pos) =>
    count + (pos.value / bottomEq(pos.x, pos.y))
  );
  const bottomRes = loop((count, pos) =>
    count + (1 / bottomEq(pos.x, pos.y))
  );
  return topRes / bottomRes;
}