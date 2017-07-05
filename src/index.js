// @flow
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// $FlowIgnore
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import theme from 'constants/theme';

import App from './containers/App';
import store from './store';

const MOUNT_NODE: HTMLElement | null = document.getElementById('root');

function render() {
  ReactDom.render(
    <Provider store={store}>
      <Router>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </Router>
    </Provider>
  , MOUNT_NODE);
}

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render();
  });
}
render();
