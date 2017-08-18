const P = 6;
const BINARY_SWITCH = 2;
// const P = 16;
// const BINARY_SWITCH = 10;
// eslint-disable-next-line
const mSQ = (v1, v2) => Math.pow((v1 - v2), BINARY_SWITCH);
// const mSQ = (v1, v2) => Math.abs((v1 - v2));
// To account for the bend
const optimal = (v1, v2, scale) => Math.min(
  mSQ(v1, v2),
  mSQ(v1, v2 + scale),
  mSQ(v2, v2 - scale),
);


const regular = (v1, v2) => mSQ(v1, v2);

export function distanceValues(points, x, y, width, height) {
  function bottomEq(point) {
    const distX = regular(x, point.x, width);
    const distY = optimal(y, point.y, height);
    // const distY = regular(y, point.y, height);
    // eslint-disable-next-line
    const res = Math.pow(distX + distY, P / 2);
    return res === 0 ? 1 : res;
  }
  const bottoms = points.map(bottomEq);
  return {
    distances: bottoms,
    eq: bottoms.reduce((sum, b) => sum + (BINARY_SWITCH / b), 0),
  };
}

export function inverseDistance(points, bottoms) {
  const sumTop = bottoms.distances.reduce((sum, d, i) =>
  sum + ((points[i].value * BINARY_SWITCH) / d)
  , 0);
  return sumTop / bottoms.eq;
}

// const points = [
//   { x: 1, y: 2, value: 0.8 },
//   { x: 2, y: 3, value: 0.5 },
//   { x: 3, y: 4, value: 0 },
//   { x: 4, y: 5, value: 0 }
// ];
// const distance = distanceValues(points, 200, 300, 300, 300);

// console.log(inverseDistance(points, distance));