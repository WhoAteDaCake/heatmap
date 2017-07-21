// @flow
// $FlowIgnore
import R from 'ramda';
// $FlowIgnore
import { interpolateRdYlBu } from 'd3-scale-chromatic';
// $FlowIgnore
import { scaleSequential } from 'd3-scale';
import { inverseDistance } from './math';
import colorToObj from './colorConvert.js';

const scale = scaleSequential(interpolateRdYlBu)
    .domain([1, 0]);

const colorFromValue = (v: number) =>
    R.memoize(R.compose(colorToObj, scale))(v);

function changeColorAt(i: number, value: number, grid: Array<number>, colorFn: Function) {
  const color = colorFromValue(value);
  const nGrid = grid;
  nGrid[i] = color[0];
  nGrid[i + 1] = color[1];
  nGrid[i + 2] = color[2];
  return nGrid;
}
// eslint-disable-next-line
onmessage = (e) => {
  const {
    height, width,
    gridWidth,
    points,
  } = e.data;

  let { grid } = e.data;

  for (let row = 0; row < height; row += 1) {
    for (let i = 0; i < gridWidth; i += 4) {
      const index = i + (row * gridWidth);
      const x = i / 4;
      const value = inverseDistance(points, x, row);
      grid = changeColorAt(index, value, grid);
    }
  }

  // eslint-disable-next-line
	postMessage(grid);
};