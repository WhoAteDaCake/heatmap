export default function pipe(...fns) {
  if (fns.length === 0) {
    return val => val;
  }
  return val => fns.reduce((v, fn) => fn(v), val);
}