import { createStyleSheet } from 'helpers/material';

export default createStyleSheet('Header', theme => ({
  root: {
    fontFamily: 'sans-serif',
    margin: '10px',
    display: 'flex',
  },
  icon: {
    marginRight: '20px',
  }
}));
