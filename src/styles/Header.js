import { createStyleSheet } from 'helpers/material';

export default createStyleSheet('Header', theme => ({
  root: {
    background: 'white',
  },
  text: {
    fontWeight: 300,
    color: black,
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
