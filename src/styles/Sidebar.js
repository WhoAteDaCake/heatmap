import { createStyleSheet } from 'helpers/material';

export default createStyleSheet('sidebar', theme => ({
  root: {
    height: '100vh',
    width: 0,
    minWidth: 0,
    boxFlex: 0,
    backgroundColor: theme.palette.primary[600],
    color: theme.palette.primary[50],
    overflow: 'hidden',
    transition: 'width 0.2s linear, min-width 0.2s linear',
    '&--active': {
      minWidth: '200px',
      width: '200px',
      // transition: 'min-width 0.2s linear',
    },
  },
  list: {
    color: 'white !important',
    '& > h3': {
      color: 'white',
      'letter-spacing': '0.1em',
      fontFamily: '"Roboto", sans-serif',
    }
  }
}));
