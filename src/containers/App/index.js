// @flow
import React from 'react';
import { Switch } from 'react-router-dom';

import mapRoutes from '../../helpers/mapRoutes';
import routes from '../../constants/routes';
import Header from '../../components/Header';

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Switch>
          {mapRoutes(routes)}
        </Switch>
      </div>
    </div>
  );
}
