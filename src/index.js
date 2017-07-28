// @flow
import HeatMap from './heatmap';

if (module.hot) {
  module.hot.accept('./heatmap', window.location.reload);
}
window.onload = () => {
  const canvas = document.createElement('canvas');
  const w = 100;
  const h = 100;

  canvas.height = h;
  canvas.width = w;
  const body = document.body;
  if (body !== null) {
    body.appendChild(canvas);
  }
  const options = {
    canvas,
    scale: [0, 1],
    height: h,
    width: w,
  };
  const heatMap = new HeatMap(options);
  heatMap.setRandomPoints(8);
  const t0 = performance.now();
  heatMap.drawLayers().then((t1) => {
    console.log(`Took ${t1 - t0} to paint`);
  });
  window.heatMap = heatMap;
};