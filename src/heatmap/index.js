// @flow
// $FlowIgnore
import { interpolateRdYlBu } from 'd3-scale-chromatic';
// $FlowIgnore
import { scaleSequential } from 'd3-scale';
// $FlowIgnore
import R from 'ramda';

// eslint-disable-next-line
const Worker = require('worker-loader!../module/worker');

type Point = Object | Array<number>;
type ColorArr = Array<number>;

function log(msg: string, type: string = 'log') {
  console[type](msg);
}

const rand = mod =>
  parseInt((Math.random() * 10000) % mod, 10);

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
  setPointValue(index: number, value: number) {
    this.points[index].value = value;
  }
  setPoint = (point: Point) => {
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
  setRandomCoordinates = (count: number): void => {
    const { width, height } = this;
    for (let i = 0; i < count; i += 1) {
      this.setPoint({
        x: rand(this.width),
        y: rand(this.height),
        value: 0,
      });
    }
  }
  setRandomValues() {
    const { length } = this.points;
    for (let i = 0; i < length; i += 1) {
      this.setPointValue(i, (rand(1000) % 10) / 10);
    }
  }
  drawLayers = (): Promise<*> => new Promise((res, rej) => {
    const { height, width, points, gl } = this;
    const img = gl.getImageData(0, 0, width, height);

    this.worker.onmessage = (e) => {
      img.data.set(new Uint8ClampedArray(e.data));
      gl.scale(3, 3);
      gl.putImageData(img, 0, 0);
      res(performance.now());
    };

    this.worker.postMessage({
      points,
      height,
      width,
    });
  });
}