const low = [58,75,229];
const mid = [ 199, 255, 128];
const high = [255, 61, 54];

function transition(value, max, s, e) {
  const color = s * (max - value) + (e * value);
  return parseInt(color * 2, 10);
}

function transition3(value, maximum, s, e) {
  const r1 = transition(value, maximum, s[0], e[0]);
  const r2 = transition(value, maximum, s[1], e[1]);
  const r3 = transition(value, maximum, s[2], e[2]);
  return [r1, r2, r3];
}

const colorValue = (maximum, s, m, e) => (value) => {
  const midPoint = maximum / 2;
  if (value < midPoint) {
    return transition3(value, midPoint, s, m);
  }
  return transition3(value - midPoint, midPoint, m, e);
};

export default colorValue(1, low, mid, high);