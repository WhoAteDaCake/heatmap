import { createStyleSheet } from 'helpers/material';

export default createStyleSheet('sidebar', theme => ({
  root: {
    height: '100vh',
    minWidth: '200px',
    width: '200px',
    boxFlex: '0',
    fontFamily: 'sans-serif',
    backgroundColor: theme.palette.primary[600],
    color: theme.palette.primary[50],
    overflow: 'hidden'
  }
}));
