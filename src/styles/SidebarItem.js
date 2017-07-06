import { createStyleSheet } from 'helpers/material';

export default createStyleSheet('template', theme => ({
  root: {
    display: 'flex',
    color: 'white',
    backgroundColor: theme.palette.primary[400],
    textDecoration: 'none',
    padding: '10px',
  }
}));
