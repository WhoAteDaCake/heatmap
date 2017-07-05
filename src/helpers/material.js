// @flow
// $FlowIgnore bug in flow where it doesn't allow deeper exports
import { createStyleSheet as styleSheet, withStyles as wrapStyles } from 'material-ui/styles';

export function createStyleSheet(name: string, fn: Function) {
  return styleSheet(name, fn);
}

export function withStyles(sheet: Object) {
  return (component: ReactClass<*>) => wrapStyles(sheet)(component);
}
