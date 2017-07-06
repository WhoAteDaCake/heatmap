import { createStyleSheet } from 'helpers/material';

export default createStyleSheet('sidebar', theme => ({
  root: {
    height: '100vh',
    minWidth: '200px',
    width: '200px',
    boxFlex: '0',
    backgroundColor: theme.palette.primary[600],
    color: theme.palette.primary[50],
    overflow: 'hidden'
  },
  list: {
    color: 'white !important',
    '& > h3': {
      color: 'white'
    }
  }
}));
