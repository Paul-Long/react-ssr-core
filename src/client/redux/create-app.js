import React from 'react';
import ReactDOM from 'react-dom';
import * as Routers from 'react-router-dom';
import { Provider } from 'react-redux';
import invariant from 'invariant';
import createHistory from 'history/createMemoryHistory';
import { isFunction } from './utils';
import create from './core';

function createApp(opts = {}) {
  const {onEffect, onFetchOption, onReducer} = opts;
  const history = opts.history || createHistory();
  const createOpts = {
    setupApp(app) {
      app._history = patchHistory(history);
    },
    onEffect,
    onFetchOption,
    onReducer,
    history,
  };

  const app = create(createOpts);
  const oldAppStart = app.start;
  app.router = router;
  app.start = start;
  return app;

  function start({initialState}) {
    invariant(
      app._router,
      `[app.router] router must be registered before app.start()`,
    );

    if (!app._store) {
      oldAppStart(app, initialState);
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

function patchHistory(history) {
  const oldListen = history.listen;
  history.listen = (callback) => {
    callback(history.location);
    return oldListen.call(history, callback);
  };
  return history;
}

export default createApp;
