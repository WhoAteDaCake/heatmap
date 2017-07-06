import { createStyleSheet } from 'helpers/material';

export default createStyleSheet('sidebar', theme => ({
  root: {
    height: '100vh',
    minWidth: '0',
    width: '0',
    boxFlex: '0',
    backgroundColor: theme.palette.accent[700],
    color: theme.palette.accent[50],
    overflowX: 'hidden',
    transition: 'width 0.2s linear, min-width 0.2s linear',
    '&--active': {
      minWidth: '200px',
      width: '200px',
      padding: '0.5em',
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
      backgroundColor: theme.palette.accent[100],
    },
    '&:after': {
      backgroundColor: theme.palette.accent.A100,
    }
  },
  child: {
    paddingLeft: '40px',
  }
}));
