import { applyMiddleware, compose, createStore } from 'redux';

export default function (opts = {}) {
  const {
    reducers,
    initialState,
    sagaMiddleware,
  } = opts;
  let devtools = () => noop => noop;
  const middlewares = [
    sagaMiddleware,
  ];
  const enhancers = [
    applyMiddleware(...middlewares),
  ];
  if (!global.window) {
    global.window = {};
  }
  if (
    process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION__
  ) {
    devtools = window.__REDUX_DEVTOOLS_EXTENSION__;
    enhancers.push(devtools(window.__REDUX_DEVTOOLS_EXTENSION__OPTIONS));
  }
  return createStore(reducers, initialState, compose(...enhancers));
}
