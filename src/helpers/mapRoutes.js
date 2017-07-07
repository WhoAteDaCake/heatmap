// @flow
import React from 'react';
import {
  Route,
} from 'react-router-dom';
import shortid from 'shortid';

/**
 * Will map route and sub-routes
 */
function RouteWithSubRoutes(route: Object): React$Element<*> {
  return (
    <Route
      path={route.path}
      exact
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
/**
 * Will map route from route object
 * @param {object} route
 * @return {object}
 */
function mapRoute(route: Object): React$Element<*> {
  return (
    <RouteWithSubRoutes key={shortid.generate()} {...route} />
  );
}
/**
 * Will map all routes from routes object
 * @param {object} route
 * @return {object}
 */
function mapRoutes(routes: Array<Route>): Array<React$Element<*>> {
  return routes.map(mapRoute);
}

export default mapRoutes;
