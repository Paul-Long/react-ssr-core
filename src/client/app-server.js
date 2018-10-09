import '@utils/date';
import React from 'react';
import Action from '@actions';
import { StaticRouter, Switch } from 'react-router';
import { matchRoutes, renderRoutes } from 'react-router-config';
import App from './redux/create-app';
import modules from './modules';
import routes from './routes/server';

export default async ({history, url, logger}) => {
  const app = new App({history});
  app.models(modules);
  const routeArr = routes({history, url});
  app.router(() => (
    <StaticRouter context={{}} location={url}>
      <Switch>
        {renderRoutes(routeArr)}
      </Switch>
    </StaticRouter>
  ));
  const container = app.start({initialState: {}});
  let initialState = {};
  try {
    const branch = matchRoutes(routeArr, url);
    const promises = branch
      .filter(({route}) => !!route.component.fetch)
      .map(({route}) => {
        return route.component.fetch(app._store);
      });

    if (promises.length > 0) {
      await Promise.all(promises).catch(err => console.log(err));
      initialState = app._store.getState();
    }
  } catch (err) {
    logger.error(err);
  }
  new Action({dispatch: app._store.dispatch});
  return {
    container,
    initialState,
  };
}
