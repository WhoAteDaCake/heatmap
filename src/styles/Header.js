import { createStyleSheet } from 'helpers/material';

export default createStyleSheet('Header', theme => ({
  root: {
    background: theme.white[500],
    color: theme.palette.primary[900],
    boxShadow: '1px -7px 4px -1px rgba(0, 0, 0, 0.2), -2px 2px 5px 0px rgba(0, 0, 0, 0.14), -4px -4px 10px 0px rgba(0, 0, 0, 0.12)',
  },
  text: {
    fontWeight: 300,
    color: 'black',
  },
  button: {
    marginLeft: 'auto',
  },
  icon: {
    marginRight: '20px',
    outline: 'none',
    cursor: 'pointer',
  }
}));
