const P = 2;
const BINARY_SWITCH = 2;
// const P = 16;
// const BINARY_SWITCH = 10;
// eslint-disable-next-line
const mSQ = (v1, v2) => (v1 - v2) ** BINARY_SWITCH;
// const mSQ = (v1, v2) => Math.abs((v1 - v2));
// To account for the bend
const optimal = (v1, v2, scale, cl = false) => {
  const vals = [
    mSQ(v1, v2),
    mSQ(v1, v2 + (scale - 1)),
    mSQ(v1, v2 - (scale - 1)),
  ];
  if (cl === true) {
    console.log('-------Opti');
    console.log(v1, v2, scale);
    console.log(vals);
    console.log('-------Opti');
  }
  return Math.min(...vals);
};


const regular = (v1, v2) => mSQ(v1, v2);

export function distanceValues(points, x, y, width, height) {
  function bottomEq(point) {
    const distX = regular(x, point.x, width);
    const distY = optimal(y, point.y, height);
    // const distY = regular(y, point.y, height);
    if (x === 3 && y === 0 && point.x === x) {
      console.log(y, distY, point.y, height);
      console.log('Y', distY);
      console.log('Y2', optimal(y, point.y, height, true));
      // const vals = [
      //   mSQ(y, point.y),
      //   mSQ(y, point.y + (height - 1)),
      //   mSQ(y, point.y - (height - 1))
      // ];
      // console.log(vals);
      // console.log(Math.min(...vals));
    }
    // eslint-disable-next-line
    const res = (distX + distY) ** (P / 2);
    return res === 0 ? 1 : res;
  }
  const distances = points.map(bottomEq);
  const eq = distances.reduce((sum, b) => sum + (BINARY_SWITCH / b), 0);
  // if (x === 3 && y === 0) {
  //   console.log(distances, eq);
  // }
  return { distances, eq };
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