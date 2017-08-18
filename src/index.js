// @flow
import HeatMap from './heatmap';

if (module.hot) {
  module.hot.accept('./heatmap', window.location.reload);
}

function delay(t) {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
}

function loop(t, heatMap, canvas, canvas2) {
  async function inner() {
    await delay(t);
    heatMap.setRandomValues();
    const ts = performance.now();
    await heatMap.drawLayers();
    console.log(performance.now() - ts);
    if (!window.stopLoop) {
      // inner();
    }
  }
  inner();
}

function makeCanvas(w, h) {
  const canvas = document.createElement('canvas');
  canvas.height = h;
  canvas.width = w;
  canvas.style.width = `${w}px`;
  canvas.style.height = `${h}px`;
  return canvas;
}

async function draw(heatMap, canvas, canvas2) {
  // heatMap.setPoint([295, 5, 1]);
  // heatMap.setPoint([5, 295, 0]);
  // heatMap.setPoint([100, 0, 0.9]);
  // heatMap.setPoint([50, 0, 0.5]);
  // heatMap.setPoint([0, 0, 0.4]);
  // heatMap.setPoint([150, 150, 0.3]);
  let points = localStorage.getItem('points');

  if (points === null || points === 'null') {
    heatMap.setRandomCoordinates(24);
    heatMap.setRandomValues();
    points = JSON.stringify(heatMap.points);
    localStorage.setItem('points', points);
  }
  // eslint-disable-next-line
  heatMap.setPoints(JSON.parse(points));

  const t0 = performance.now();
  const t2 = await heatMap.drawLayers();
  console.log(t2 - t0);

  const ctx = canvas2.getContext('2d');
  ctx.drawImage(canvas, 0, 0);
}

window.onload = async () => {
  const w = 300;
  const h = 300;

  const canvas = makeCanvas(w, h);
  const canvas2 = makeCanvas(w, h);

  const body = document.body;
  if (body !== null) {
    body.appendChild(canvas);
    body.appendChild(canvas2);
  }

  const options = {
    canvas,
    scale: [0, 1],
    height: h,
    width: w,
  };
  const heatMap = new HeatMap(options);
  draw(heatMap, canvas, canvas2);
  // eslint-disable-next-line
  document.getElementById('redraw').onclick = () => {
    localStorage.setItem('points', 'null');
    window.location.reload();
  };
  window.heatMap = heatMap;
};