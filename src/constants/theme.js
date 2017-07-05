// @flow
/* eslint-disable quote-props */
// $FlowIgnore it's a bug in flow
import { createMuiTheme } from 'material-ui/styles';
// $FlowIgnore it's a bug in flow
import red from 'material-ui/colors/red';
// $FlowIgnore it's a bug in flow
import createPalette from 'material-ui/styles/palette';

const primary = {
  '50': '#e4e5e6',
  '100': '#babec1',
  '200': '#8d9397',
  '300': '#5f676d',
  '400': '#3c474e',
  '500': '#1a262f',
  '600': '#17222a',
  '700': '#131c23',
  '800': '#0f171d',
  '900': '#080d12',
  A100: '#55aaff',
  A200: '#2290ff',
  A400: '#0077ee',
  A700: '#006ad4',
  contrastDefaultColor: 'light',
};

const accent = {
  '50': '#ffeee9',
  '100': '#fed5c8',
  '200': '#feb9a4',
  '300': '#fe9d7f',
  '400': '#fd8863',
  '500': '#fd7348',
  '600': '#fd6b41',
  '700': '#fc6038',
  '800': '#fc5630',
  '900': '#fc4321',
  A100: '#ffffff',
  A200: '#ffffff',
  A400: '#ffd4cd',
  A700: '#ffbdb3',
  contrastDefaultColor: 'dark',
};

export default createMuiTheme({
  palette: createPalette({
    primary, // Purple and green play nicely together.
    accent,
    error: red,
  }),
});
