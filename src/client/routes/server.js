import React from 'react';
import { Route, StaticRouter, Switch } from 'react-router';
import App from '@containers/app';
import Login from '@containers/login';
import Charts from '@containers/charts';
import Home from '@containers/home';
import Help from '@containers/help';
import About from '@containers/about';
import Users from '@containers/users';

export default ({history, url}) => {
  const routes = (
    <Switch>
      <Route path='/login' exact component={Login} />
      <Route path='/' component={(props) => (
        <App {...props}>
          <Route path='/charts' exact component={Charts} />
          <Route path='/help' exact component={Help} />
          <Route path='/about' exact component={About} />
          <Route path='/home' exact component={Home} />
          <Route path='/users' exact component={Users} />
        </App>
      )} />
    </Switch>
  );
  return (
    <StaticRouter context={{}} location={url}>
      {routes}
    </StaticRouter>
  );
}
