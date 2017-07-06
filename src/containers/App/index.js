// @flow
import React from 'react';
import { Switch } from 'react-router-dom';

import mapRoutes from '../../helpers/mapRoutes';
import routes from '../../constants/routes';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

export default function App() {
  const container = {
    display: 'flex',
    height: '100vh',
    padding: '0',
    boxOrient: 'horizontal'
  };
  const content = {
    display: 'box',
    width: '100%',
  };
  return (
    <div className="app" style={container}>
      <Sidebar />
      <div className="app__body" style={content}>
        <Header />
        <Switch>
          {mapRoutes(routes)}
        </Switch>
      </div>
    </div>
  );
}
