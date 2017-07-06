// @flow
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// $FlowIgnore
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import theme from 'constants/theme';
import createDebugger from 'helpers/debug';
import App from './containers/App';
import store from './store';

const debug = createDebugger('root:mount');

const MOUNT_NODE: HTMLElement | null = document.getElementById('root');

if (MOUNT_NODE === null) {
  debug('Mount node is not a valid DOM element');
}

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
  module.hot.accept('./reducers/index', () => {
    const nextReducer = require('./reducers/index');
    store.replaceReducer(nextReducer);
  });
}
render();
