// @flow
/* eslint-disable quote-props */
// $FlowIgnore it's a bug in flow
import { createMuiTheme } from 'material-ui/styles';
// $FlowIgnore it's a bug in flow
import red from 'material-ui/colors/red';
// $FlowIgnore it's a bug in flow
import createPalette from 'material-ui/styles/palette';

const white = {
  '50': '#fbfbfc',
  '100': '#f5f5f8',
  '200': '#efeff3',
  '300': '#e8e8ee',
  '400': '#e3e3eb',
  '500': '#dedee7',
  '600': '#dadae4',
  '700': '#d5d5e0',
  '800': '#d1d1dd',
  '900': '#c8c8d7',
  A100: '#ffffff',
  A200: '#ffffff',
  A400: '#ffffff',
  A700: '#ffffff',
  'contrastDefaultColor': 'dark',
};
/* eslint-disable */
const primary = {
  '50': '#e7e7e7',
  '100': '#c3c4c4',
  '200': '#9b9c9d',
  '300': '#737476',
  '400': '#555758',
  '500': '#37393b',
  '600': '#313335',
  '700': '#2a2c2d',
  '800': '#232426',
  '900': '#161719',
  A100: '#6ab0f6',
  A200: '#3a96f3',
  A400: '#007dfa',
  A700: '#0070e0',
  'contrastDefaultColor': 'light',
};

const accent = {
  '50': '#ebf3fb',
  '100': '#cce1f6',
  '200': '#abcef0',
  '300': '#89baea',
  '400': '#6fabe6',
  '500': '#569ce1',
  '600': '#4f94dd',
  '700': '#458ad9',
  '800': '#3c80d5',
  '900': '#2b6ecd',
  A100: '#ffffff',
  A200: '#dae9ff',
  A400: '#a7caff',
  A700: '#8ebaff',
  'contrastDefaultColor': 'dark',
};



export default createMuiTheme({
  palette: createPalette({
    primary, // Purple and green play nicely together.
    accent,
    error: red,
  }),
  white,
});
