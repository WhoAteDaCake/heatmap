import { createStyleSheet } from 'helpers/material';

export default createStyleSheet('sidebar', theme => ({
  root: {
    height: '100vh',
    minWidth: '0',
    width: '0',
    boxFlex: '0',
    backgroundColor: theme.palette.primary[300],
    color: theme.palette.primary[50],
    overflowX: 'hidden',
    transition: 'width 0.2s linear, min-width 0.2s linear',
    '&--active': {
      minWidth: '200px',
      width: '200px',
    },
  },
  img: {
    padding: '20px',
    width: '160px',
    height: 'auto',
  },
  list: {
    color: 'white !important',
    overflowX: 'hidden',
    '& > h3': {
      color: 'white',
      'letter-spacing': '0.1em',
      fontFamily: '"Roboto", sans-serif',
    }
  },
  input: {
    width: '160px',
    color: 'white',
    borderBottomColor: 'white',
    margin: '0px 20px',
  },
  underline: {
    '&:before': {
      backgroundColor: 'grey',
    },
    '&:after': {
      backgroundColor: 'grey',
    }
  }
}));
