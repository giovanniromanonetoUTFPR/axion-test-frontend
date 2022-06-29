import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from '../pages/Login';

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
