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
    padding: '27px',
    width: '180px',
    height: 'auto',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white !important',
    overflowX: 'hidden',
    fontSize: '10px',
    '& > a > div': {
      '& > i': {
        fontSize: '20px',
        color: 'white',
      },
      '& > div > h3': {
        color: 'white',
        'letter-spacing': '0.1em',
        fontFamily: '"Roboto", sans-serif',
        fontSize: '15px',
      },
      '& > span': {
        color: 'white',
      }
    },
  },
  input: {
    width: '180px',
    color: 'white',
    borderBottomColor: 'white',
    margin: '0px 32px',
  },
  underline: {
    '&:hover:not([class^="-disabled-"]):before': {
      backgroundColor: `${theme.palette.accent[200]} !important`,
    },
    '&:before': {
      backgroundColor: theme.white[300],
    },
    '&:after': {
      backgroundColor: theme.palette.primary.A100,
    }
  },
  child: {
    paddingLeft: '40px',
  },
  rotate: {
    transitionDuration: '0.2s',
    transform: 'rotate(-90deg)',
  },
  fadeEnter: {
    top: '100px',
  },
  fadeEnterActive: {
    top: 0,
  },
  subRoot: {
    color: theme.white[500],
  },
  open: {
    maxHeight: 'auto',
    overflow: 'hidden',
  },
  closed: {
    overflow: 'hidden',
    margin: 0,
    padding: 0,
    maxHeight: 0,
  },
}));
