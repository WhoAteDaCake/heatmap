import { createStyleSheet } from 'helpers/material';

export default createStyleSheet('Header', theme => ({
  root: {},
  text: {
    fontWeight: 300,
  },
  button: {
    marginLeft: 'auto',
  },
  icon: {
    marginRight: '20px',
    outline: 'none',
    cursor: 'pointer',
  }
}));
