import { createStyleSheet } from 'helpers/material';

export default createStyleSheet('sidebar', theme => ({
  root: {
    minWidth: '0',
    height: '100%',
    width: '0',
    boxFlex: '0',
    backgroundColor: theme.palette.primary[500],
    color: theme.palette.accent[50],
    overflowX: 'hidden',
    transition: 'width 0.2s linear, min-width 0.2s linear',
    '&--active': {
      minWidth: '250px',
      width: '250px',
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
    fontSize: '10px',
    '& > div > i': {
      fontSize: '20px',
    },
    '& > h3': {
      color: 'white',
      'letter-spacing': '0.1em',
      fontFamily: '"Roboto", sans-serif',
      fontSize: '15px',
    }
  },
  input: {
    width: '180px',
    color: 'white',
    borderBottomColor: 'white',
    margin: '0px 32px',
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
