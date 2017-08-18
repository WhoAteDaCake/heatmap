export default function createCache() {
  const store = {};

  return {
    get(x, y) {
      return store[`${x}-${y}`];
    },
    put(x, y, val) {
      store[`${x}-${y}`] = val;
    },
    store,
  };
}