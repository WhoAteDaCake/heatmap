// @flow
// $FlowIgnore

type Point = Object;
type Points = Array<Point>

const P = 6;

const mSQ = (v1, v2) => (v1 - v2) ** 2;
const bottomEq = (x, y, width) => ({ x: x1, y: y1 }) => {
  const xDistance = Math.min(
    mSQ(x1, x),
    mSQ(x1, x + width),
    mSQ(x1, x - width),
  );
  return (xDistance + mSQ(y1, y)) ** (P / 2);
};

export function distanceValues(points: Points, x: number, y: number, width: number) {
  return points.map(bottomEq(x, y, width));
}

export function inverseDistance(points: Points, bottoms: Array<number>): number {
  const summation = bottoms.reduce((sum, pos, i) => ({
    top: sum.top + (points[i].value / pos),
    bottom: sum.bottom + (1 / pos)
  }), { top: 0, bottom: 0 });

  return summation.top / summation.bottom;
}