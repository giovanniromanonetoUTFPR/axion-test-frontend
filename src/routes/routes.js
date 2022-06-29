import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Cadastro } from '../pages/Cadastro';

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Cadastro} />
      </Switch>
    </BrowserRouter>
  );
}
