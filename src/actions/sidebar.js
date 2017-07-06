// @flow
import { SIDEBAR } from 'constants/actionTypes';

type sidebarState = 'open' | 'close';
/**
 * Will toggle sidebar
 */
export function toggleSidebar(dispatch: Dispatch<*>): (side: sidebarState) => void {
  return (side: sidebarState) =>
    dispatch({ type: SIDEBAR[side.toUpperCase()] });
}
