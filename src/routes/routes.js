import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Context imports
import { AuthProvider } from '../contexts/AuthContext';

//Page imports
import { Login } from '../pages/Login';
import { Cadastro } from '../pages/Cadastro';
import { Comidas } from '../pages/Comidas';
import { Locais } from '../pages/Locais';
import { Pessoas } from '../pages/Pessoas';

export function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Cadastro} />
          <Route exact path="/food" component={Comidas} />
          <Route exact path="/places" component={Locais} />
          <Route exact path="/people" component={Pessoas} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}
