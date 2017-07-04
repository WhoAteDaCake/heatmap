import React from 'react';
import { Switch } from 'react-router-dom';

import mapRoutes from 'helpers/mapRoutes';
import routes from 'constants/routes';

export default function App() {
  return (
    <div className="app">
      <div className="header">Header</div>
      <div className="app__body">
        <Switch>
          {mapRoutes(routes)}
        </Switch>
      </div>
    </div>
  );
}
