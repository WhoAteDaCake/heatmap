// @flow
// $FlowIgnore
import { interpolateRdYlBu } from 'd3-scale-chromatic';
// $FlowIgnore
import { scaleSequential } from 'd3-scale';
// $FlowIgnore
import { compose, replace, memoize } from 'ramda';
import { inverseDistance, distanceValues } from './math';

const scale = scaleSequential(interpolateRdYlBu)
  .domain([1, 0]);

const colorRegExp = /rgb\((.*),(.*),(\s.*)\)/g;
const colorToObj = compose(JSON.parse, replace(colorRegExp, '[$1,$2,$3]'));
const colorFromValue = compose(colorToObj, scale);


function pointValue(x: number, y: number, points: Array<Object>): number {
  const len = points.length;
  for (let i = 0; i < len; i += 1) {
    if (points[i].x === x && points[i].y === y) {
      return points[i].value;
    }
  }
  return undefined;
}

function dictionary() {
  const store = {};

  return {
    get(x: number, y: number) {
      return store[`${x}-${y}`];
    },
    put(x: number, y: number, val: any) {
      store[`${x}-${y}`] = val;
    }
  };
}

const cache = dictionary();

function calculate(points: Array<*>, width: number, height: number) {
  const gridWidth = width * 4;
  const grid = new Uint8Array(width * height * 4);

  for (let y = 0; y < height; y += 1) {
    const rowIndex = y * gridWidth;
    for (let i = 0; i < gridWidth; i += 4) {
      const index = i + rowIndex;
      const x = i / 4;

      let distances = cache.get(x, y);

      if (distances === undefined) {
        distances = distanceValues(points, x, y, width);
        cache.put(x, y, distances);
      }
      const value = pointValue(x, y, points) || inverseDistance(points, distances);

      const color = colorFromValue(value);

      grid[index] = color[0];
      grid[index + 1] = color[1];
      grid[index + 2] = color[2];
      grid[index + 3] = 255;
    }
  }
  return grid;
}

self.onmessage = (e) => {
  const { points, width, height } = e.data;
  const grid = calculate(points, width, height);
  self.postMessage(grid.buffer, [grid.buffer]);
};