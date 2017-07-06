// @flow

export default function routeToLabel(route: string): string {
  if (route.length === 1) {
    return 'Home';
  }
  return 'Unknown';
}
