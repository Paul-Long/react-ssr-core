import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';
import { reducerBuilder } from './reducerBuilder';
import { sagaBuilder } from './sagaBuilder';
import 'react-redux';

const cSagaMiddleware = createSagaMiddleware.default || createSagaMiddleware;

export default function create(createOpts = {}) {
  const {setupApp, onError: onErr, onEffect, onFetchOption, onReducer, history} = createOpts;
  const app = {
    _models: [],
    model,
    models,
    reducerMiddleware,
    start,
  };

  return app;

  function model(model) {
    app._models.push(model);
  }

  function models(models) {
    app._models = [...app._models, ...models];
  }

  function reducerMiddleware(middleware) {
    app._reducerMiddleware = middleware;
  }

  function start(app, initialState = {}) {
    const sagaMiddleware = cSagaMiddleware();
    const store = createStore({
      reducers: reducerBuilder(app._models, onReducer),
      initialState,
      sagaMiddleware,
    });
    app._store = store;

    store.runSaga = sagaMiddleware.run;
    const sagas = sagaBuilder(app._models, {onEffect, onFetchOption, history});
    sagaMiddleware.run(sagas);
    setupApp(app);
  }
};
