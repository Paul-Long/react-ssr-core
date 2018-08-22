import React from 'react';
import { Router, Route, Switch, StaticRouter } from 'react-router';
import App from '@containers/app';
import Login from '@containers/login';
import '../themes';

export default ({ history, url }) => {
  const routes = (
    <Switch>
      <Route path='/login' exact component={Login} />
      <Route path='/' component={App} />
    </Switch>
  );
  if (url) {
    return (
      <StaticRouter context={{}} location={url}>
        {routes}
      </StaticRouter>
    );
  }
  return (
    <Router history={history}>
      {routes}
    </Router>
  );
}
