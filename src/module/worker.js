// @flow
import pipe from '../heatmap/pipe';
import { inverseDistance, distanceValues } from './math';
import createCache from './createCache';
// import colorVal from './color3';
import colorVal from './colorHSL';

const cache = createCache();

function pointsToCache(points) {
  points.map(({ x, y, value }) =>
    cache.put(x, y, value)
  );
  return undefined;
}


function calculate(points, width, height) {
  const grid = new Uint8Array(width * height);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = x + (y * width);
      let atPoint = cache.get(x, y);
      if (atPoint === undefined) {
        atPoint = distanceValues(points, x, y, width, height);
        cache.put(x, y, atPoint);
      }
      // This is because we cache the point values as numbers
      const value = typeof atPoint === 'number' ?
      atPoint : inverseDistance(points, atPoint);

      // const color = colorVal(value);
      grid[index] = value * 255;
      // grid[index] = color[0];
      // grid[index + 1] = color[1];
      // grid[index + 2] = color[2];
      // grid[index + 3] = 255;
    }
  }
  return grid;
}

self.onmessage = (e) => {
  const { points, width, height } = e.data;
  pointsToCache(points);
  const grid = calculate(points, width, height);
  self.postMessage(grid.buffer, [grid.buffer]);
};