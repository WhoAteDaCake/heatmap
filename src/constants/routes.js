import Home from 'routes/Home';
import Projects from 'routes/Projects';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    name: 'Home'
  }, {
    path: '/projects',
    component: Projects,
    name: 'Projects'
  },
];

export default routes;
