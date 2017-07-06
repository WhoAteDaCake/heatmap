// @flow
import React from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import mapRoutes from 'helpers/mapRoutes';
import { withStyles, createStyleSheet } from 'helpers/material';

import routes from 'constants/routes';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

const styles = createStyleSheet('App', theme => ({
  root: {
    display: 'flex',
    height: '100vh',
    padding: '0',
    boxOrient: 'horizontal',
    fontFamily: '"Roboto", sans-serif',
  },
  content: {
    display: 'flex',
    width: '100%',
  },
}));

function App({ classes }) {
  return (
    <div className={classes.root}>
      <Sidebar />
      <div className={classes.content}>
        <Header />
        <Switch>
          {mapRoutes(routes)}
        </Switch>
      </div>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    content: PropTypes.string,
  }).isRequired
};

const styledClass = withStyles(styles)(App);
export default styledClass;
