import '@utils/date';
import React from 'react';
import Action from '@actions';
import App from './redux/create-app';
import modules from './modules';
import routes from './routes/client';
import './themes';

export default ({history, url}) => {
  const app = new App({history});
  app.models(modules);
  app.router(() => {
    return routes({history, url});
  });
  const container = app.start({initialState: window.__INITIAL_STATE__});
  new Action({dispatch: app._store.dispatch, history});
  return container;
}
