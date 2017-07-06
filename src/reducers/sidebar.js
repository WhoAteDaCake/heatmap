import { SIDEBAR } from 'constants/actionTypes';

function open(state, action) {
  return Object.assign(state, { open: true });
}
function close(state, action) {
  return Object.assign(state, { open: false });
}

export default {
  key: 'sidebar',
  cases: {
    [SIDEBAR.OPEN]: open,
    [SIDEBAR.CLOSE]: close,
  },
  initialState: {
    open: window.innerWidht > 480,
  },
};
