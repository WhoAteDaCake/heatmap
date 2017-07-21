// @flow
// $FlowIgnore
import { interpolateRdYlBu } from 'd3-scale-chromatic';
// $FlowIgnore
import { scaleSequential } from 'd3-scale';
// $FlowIgnore
import R from 'ramda';

import colorToObj from './colorConvert.js';
import { inverseDistance } from './math';
import { vertexShaderSource, fragmentShaderSource } from './shaders';
// eslint-disable-next-line
const Worker = require('worker-loader!./worker');

type Point = Object | Array<number>;
type ColorArr = Array<number>;

function log(msg: string, type: string = 'log') {
  console[type](msg);
}

export default class HeatMap {
  options: Object;
  colorScale: Function;
  canvas: HTMLElement;
  height: number;
  width: number;
  gl: Object;
  points: Array<Object>;
  grid: Array<Number>;
  worker: Object;

  _defaultOptions = {
    canvas: null,
    height: 100,
    width: 100,
    scale: [0, 1],
    // backgroundColor: '#000',
    backgroundColor: 'rgb(49, 54, 149)',
    // backgroundColor: '#fff',
  }

  constructor(options: Object) {
    this.options = Object.assign({}, this._defaultOptions, options);
    this.colorScale = scaleSequential(interpolateRdYlBu)
      .domain(options.scale.slice().reverse());// Need to reverse as low heat is blue
    this.points = [];

    this.worker = new Worker();

    this.initialize();
  }
  initialize = (): void => {
    const { options } = this;
    let { canvas } = options;
    const { backgroundColor } = options;
    const width = options.width || canvas.width;
    const height = options.height || canvas.height;

    if (canvas === null) {
      canvas = document.createElement('canvas');
      canvas.height = height;
      canvas.width = width;
      const { body } = document;

      if (body !== null) {
        body.appendChild(canvas);
      } else {
        log('document body not found', 'warn');
      }
    }

    const gl = canvas.getContext('2d');
    gl.fillStyle = backgroundColor;
    gl.fillRect(0, 0, width, height);
    this.gl = gl;
    this.height = height;
    this.width = width;
  }
  setPoint(point: Point): void {
    if (point instanceof Array) {
      this.points.push({
        x: point[0],
        y: point[1],
        value: point[2],
      });
    } else {
      this.points.push(point);
    }
  }
  setPoints = (points: Array<Point>): void => {
    if (!(points instanceof Array)) {
      log('setPoints first argument must be of array type', 'error');
    }
    points.map(this.setPoint);
  }
  setRandomPoints = (count: number): void => {
    const rand = mod =>
      parseInt((Math.random() * 10000) % mod, 10);
    const { width, height } = this;
    for (let i = 0; i < count; i += 1) {
      this.setPoint({
        x: rand(this.width),
        y: rand(this.height),
        value: rand(1000) / 1000,
      });
    }
  }
  // Need the bind here because we get length error as ramda uses this internally
  // colorFromValue = (scale)(v: number) =>
  //   R.memoize(R.compose(colorToObj, this.colorScale))(v);

  // changeColorAt = (i: number, value: number, grid: Array<number>): Array<number> => {
  //   const color = this.colorFromValue(value);
  //   const nGrid = grid;
  //   // console.log(color);
  //   nGrid[i] = color[0];
  //   nGrid[i + 1] = color[1];
  //   nGrid[i + 2] = color[2];
  //   return nGrid;
  // }
  // add drawPoints method
  // drawLayers = (): Promise<*> => new Promise((res, rej) => {
  //   const { points, changeColorAt } = this;
  //   if (points.length < 2) {
  //     rej('Heat mapping requires at least 2 points');
  //   }

  //   const { gl, height, width } = this;
  //   const img = gl.getImageData(0, 0, width, height);
  //   // 4 array members for each rgba color
  //   const gridWidth = width * 4;
  //   let grid = img.data;
  //   let row = 0;

  //   // Uses requestAnimation frame so that the process does not freeze
  //   // grid = this.changeColorAt(4, 1, grid);
  //   function paintRow(): any {
  //     if (row === height) {
  //       return res(performance.now());
  //     }
  //     for (let i = 0; i < gridWidth; i += 4) {
  //       const index = i + (row * gridWidth);
  //       const x = i / 4;
  //       const value = inverseDistance(points, x, row);
  //       grid = changeColorAt(index, value, grid);
  //       // debugger;
  //     }
  //     row += 1;
  //     img.data.set(grid);
  //     gl.putImageData(img, 0, 0);
  //     return requestAnimationFrame(paintRow);
  //   }
  //   requestAnimationFrame(paintRow);
  // });
  drawLayers = (): Promise<*> => new Promise((res, rej) => {
    const { points } = this;
    if (points.length < 2) {
      rej('Heat mapping requires at least 2 points');
    }

    const { gl, height, width } = this;
    const img = gl.getImageData(0, 0, width, height);
    // 4 array members for each rgba color
    const gridWidth = width * 4;
    const grid = img.data;

    // Uses requestAnimation frame so that the process does not freeze
    // grid = this.changeColorAt(4, 1, grid);
    this.worker.onmessage = (e) => {
      img.data.set(e.data);
      gl.putImageData(img, 0, 0);
      return res(performance.now());
    };
    this.worker.postMessage({
      height,
      width,
      grid,
      gridWidth,
      points,
    });
    // for (let row = 0; row < height; row += 1) {
    //   for (let i = 0; i < gridWidth; i += 4) {
    //     const index = i + (row * gridWidth);
    //     const x = i / 4;
    //     const value = inverseDistance(points, x, row);
    //     grid = changeColorAt(index, value, grid);
    //     // debugger;
    //   }
    // }
    // function paintRow(): any {
    //   if (row === height) {
    //     return res(performance.now());
    //   }
    //   for (let i = 0; i < gridWidth; i += 4) {
    //     const index = i + (row * gridWidth);
    //     const x = i / 4;
    //     const value = inverseDistance(points, x, row);
    //     grid = changeColorAt(index, value, grid);
    //     // debugger;
    //   }
    //   row += 1;
    //   img.data.set(grid);
    //   gl.putImageData(img, 0, 0);
    //   return requestAnimationFrame(paintRow);
    // }
    // requestAnimationFrame(paintRow);
  });
}