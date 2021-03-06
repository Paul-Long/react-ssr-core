import React from 'react';
import { Router, Route, Switch } from 'react-router';
import App from '@containers/app';
import login from '@async/login';
import home from '@async/home';
import charts from '@async/charts';
import help from '@async/help';
import about from '@async/about';
import users from '@async/users';
import cosFile from '@async/cosfile';
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
          <Route path='/users' exact component={users} />
          <Route path='/cosFile' exact component={cosFile} />
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
