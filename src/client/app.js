import React from 'react';
import App from './redux/create-app';
import modules from './modules';
import routes from './routes';

const app = new App({});
app.models(modules);
app.router(() => {
  return routes();
});
export default app.start();
