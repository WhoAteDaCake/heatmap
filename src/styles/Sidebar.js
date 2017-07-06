import { createStyleSheet } from 'helpers/material';

export default createStyleSheet('sidebar', theme => ({
  root: {
    height: '100vh',
    minWidth: '200px',
    width: '200px',
    boxFlex: '0',
    backgroundColor: theme.palette.primary[300],
    color: theme.palette.primary[50],
    overflowX: 'hidden'
  },
  img: {
    padding: '20px',
    width: '160px',
    height: 'auto',
  },
  list: {
    color: 'white !important',
    '& > h3': {
      color: 'white'
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
