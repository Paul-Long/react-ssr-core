import React from 'react';
import { Router, Route, Switch } from 'react-router';
import App from '@containers/app';
import login from '@async/login';
import home from '@async/home';
import charts from '@async/charts';
import help from '@async/help';
import about from '@async/about';
import '../themes';

export default ({history}) => {
  const routes = (
    <Switch>
      <Route path='/login' exact component={login} />
      <Route path='/' component={(props) => (
        <App {...props}>
          <Route path='/help' exact component={help} />
          <Route path='/about' exact component={about} />
          <Route path='/home' exact component={home} />
          <Route path='/charts' exact component={charts} />
        </App>
      )} />
    </Switch>
  );
  return (
    <Router history={history}>
      {routes}
    </Router>
  );
}
