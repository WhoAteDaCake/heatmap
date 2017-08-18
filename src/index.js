// @flow
import HeatMap from './heatmap';

// eslint-disable-next-line
const Worker = require('worker-loader!./module/worker');

const worker = new Worker();
const w = 10;
const h = 10;


function initPoints() {
  const options = {
    scale: [0, 1],
    height: h,
    width: w,
  };
  const heatMap = new HeatMap(options);
  let points = localStorage.getItem('points');

  if (points === null || points === 'null') {
    heatMap.setRandomCoordinates(h);
    heatMap.setRandomValues();
    points = JSON.stringify(heatMap.points);
    localStorage.setItem('points', points);
  }
  // eslint-disable-next-line
  return JSON.parse(points);
}

function postMessage(points) {
  return new Promise((res, rej) => {
    worker.onmessage = (e) => {
      const arr = new Uint16Array(e.data);
      res(arr);
    };
    worker.postMessage({
      points,
      height: h,
      width: w,
    });
  });
}

function findPoint(points, x, y) {
  for (let i = 0; i < points.length; i += 1) {
    if (points[i].x === x && points[i].y === y) {
      return true;
    }
  }
  return false;
}

window.onload = async () => {
  const grid = document.getElementById('root');
  // const p = initPoints();
  const p = [
    { x: 0, y: 0, value: 0.5 },
    { x: 9, y: 0, value: 0 },
    { x: 3, y: 9, value: 0.5 },
  ];
  const pointData = await postMessage(p);

  for (let y = 0; y < h; y += 1) {
    const row = document.createElement('div');
    const rowData = Array.from(pointData.slice(y * w, (y * w) + w));

    rowData
      .map((value, x) => {
        const v = (value / 255).toFixed(3);
        let backgroundColor = 'white';
        // if (x === 3 && y === 0) {
        //   console.log(value, v);
        // }
        if (findPoint(p, x, y)) {
          const colorVal = parseInt(Math.random() * 255, 10);
          backgroundColor = `rgb(${colorVal}, 155, 155)`;
        }
        const span = document.createElement('span');
        span.textContent = v;
        span.style.backgroundColor = backgroundColor;
        return row.appendChild(span);
      });

    if (grid !== null) {
      grid.appendChild(row);
    }
    // for (let x = 0; x < width; x += 1) {
    // }
  }
};
// eslint-disable-next-line
document.getElementById('redraw').onclick = (e) => {
  localStorage.setItem('points', 'null');
  window.location.reload();
};