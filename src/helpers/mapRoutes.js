import React from 'react';
import {
  Route,
} from 'react-router-dom';
import shortid from 'shortid';

/**
 * Will map route and sub-routes
 * @param {object} route
 * @return {ReactElement}
 */
function RouteWithSubRoutes(route) {
	return (
		<Route
			path={route.path}
			render={props => (
				<route.component {...props} routes={route.routes} />
			)}
		/>
	);
}
/**
 * Will map route from route object
 * @param {object} route
 * @return {Routes}
 */
function mapRoute(route) {
	return (
		<RouteWithSubRoutes key={shortid.generate()} {...route} />
	);
}
/**
 * Will map all routes from routes object
 * @param {object} route
 * @return {Routes}
 */
function mapRoutes(routes) {
	return routes.map(mapRoute);
}

export default mapRoutes;