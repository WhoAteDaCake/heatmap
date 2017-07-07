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
    flexDirection: 'column',
    height: '100vh',
    padding: '0',
    boxOrient: 'horizontal',
    fontFamily: '"Roboto", sans-serif',
    backgroundColor: theme.white[500],
  },
  body: {
    display: 'flex',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  content: {
    margin: '2em',
  },
}));

function App({ classes }) {
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.body} >
        <Sidebar />
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
