import React from 'react';
import App from './redux/create-app';
import modules from './modules';
import routes from './routes';
import './themes';

export default ({ history, url }) => {
  const app = new App({});
  app.models(modules);
  app.router(() => {
    return routes({ history, url });
  });
  return app.start();
}
