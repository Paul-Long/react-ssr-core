import React from 'react';
import ReactDOM from 'react-dom';
import * as Routers from 'react-router-dom';
import { Provider } from 'react-redux';
import invariant from 'invariant';
// import createHashHistory from 'history/createHashHistory';
import { isFunction, isHTMLElement, isString } from './utils';
import create from './core';

function createApp(opts = {}) {
  const { onEffect, onFetchOption, onReducer } = opts;
  // const history = opts.history || createHashHistory();
  const createOpts = {
    setupApp(app) {
      // app._history = patchHistory(history);
    },
    onEffect,
    onFetchOption,
    onReducer,
    // history,
  };

  const app = create(createOpts);
  const oldAppStart = app.start;
  app.router = router;
  app.start = start;
  return app;

  function start() {
    invariant(
      app._router,
      `[app.router] router must be registered before app.start()`,
    );

    if (!app._store) {
      oldAppStart(app);
    }

    const store = app._store;
    return getProvider(store, app);
  }

  function router(router) {
    invariant(
      isFunction(router),
      `[app.router] router should be function, but got ${typeof router}`,
    );
    app._router = router;
  }
}

function getProvider(store, app) {
  return (
    <Provider store={store}>
      {app._router(app, Routers)}
    </Provider>
  );
}

function render(container, store, app) {
  ReactDOM.render(getProvider(store, app), container);
}

// function patchHistory(history) {
//   const oldListen = history.listen;
//   history.listen = (callback) => {
//     callback(history.location);
//     return oldListen.call(history, callback);
//   };
//   return history;
// }

export default createApp;
