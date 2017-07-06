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
  body: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  content: {
    margin: '2em',
  },
}));

function App({ classes }) {
  return (
    <div className={classes.root}>
      <Sidebar />
      <div className={classes.body} >
        <Header />
        <div className={classes.content} >
          <Switch>
            {mapRoutes(routes)}
          </Switch>
        </div>
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
