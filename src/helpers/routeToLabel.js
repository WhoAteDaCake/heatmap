// @flow
import R from 'ramda';
import routes from 'constants/routes';

/**
 * Will map the route to header label
 */
export default function routeToLabel(route: string): any {
  const pathIsEqual = R.propEq('path')(route);
  const filter = R.filter(pathIsEqual, routes);
  return R.propOr('Uknown', 'name', filter[0]);
}
