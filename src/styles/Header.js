import { createStyleSheet } from 'helpers/material';

export default createStyleSheet('Header', theme => ({
  root: {
    fontFamily: 'sans-serif',
    padding: '10px',
    display: 'flex',
    height: '5em',
  },
  icon: {
    marginRight: '20px',
  }
}));
