import React from 'react';
import Action from '@actions';
import App from './redux/create-app';
import modules from './modules';
import routes from './routes';
import './themes';

export default ({ history, url }) => {
  const app = new App({ history });
  app.models(modules);
  app.router(() => {
    return routes({ history, url });
  });
  const container = app.start();
  new Action({ dispatch: app._store.dispatch });
  return container;
}
