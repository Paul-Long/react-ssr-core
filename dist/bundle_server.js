module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/render-server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/app.js":
/*!***************************!*\
  !*** ./src/client/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _createApp = __webpack_require__(/*! ./redux/create-app */ "./src/client/redux/create-app.js");

var _createApp2 = _interopRequireDefault(_createApp);

var _modules = __webpack_require__(/*! ./modules */ "./src/client/modules/index.js");

var _modules2 = _interopRequireDefault(_modules);

var _routes = __webpack_require__(/*! ./routes */ "./src/client/routes/index.js");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _createApp2.default({});
app.models(_modules2.default);
app.router(function () {
  return (0, _routes2.default)();
});
exports.default = app.start();

/***/ }),

/***/ "./src/client/modules/app.js":
/*!***********************************!*\
  !*** ./src/client/modules/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  key: 'app',
  initialState: { count: 2 }
}];

/***/ }),

/***/ "./src/client/modules/index.js":
/*!*************************************!*\
  !*** ./src/client/modules/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = __webpack_require__(/*! ./app */ "./src/client/modules/app.js");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_app2.default];

/***/ }),

/***/ "./src/client/redux/core.js":
/*!**********************************!*\
  !*** ./src/client/redux/core.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = create;

var _reduxSaga = __webpack_require__(/*! redux-saga */ "redux-saga");

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _createStore = __webpack_require__(/*! ./createStore */ "./src/client/redux/createStore.js");

var _createStore2 = _interopRequireDefault(_createStore);

var _reducerBuilder = __webpack_require__(/*! ./reducerBuilder */ "./src/client/redux/reducerBuilder.js");

var _sagaBuilder = __webpack_require__(/*! ./sagaBuilder */ "./src/client/redux/sagaBuilder.js");

__webpack_require__(/*! react-redux */ "react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cSagaMiddleware = _reduxSaga2.default.default || _reduxSaga2.default;

function create() {
  var createOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var setupApp = createOpts.setupApp,
      onErr = createOpts.onError,
      onEffect = createOpts.onEffect,
      onFetchOption = createOpts.onFetchOption,
      onReducer = createOpts.onReducer,
      history = createOpts.history;

  var app = {
    _models: [],
    model: model,
    models: models,
    reducerMiddleware: reducerMiddleware,
    start: start
  };

  return app;

  function model(model) {
    app._models.push(model);
  }

  function models(models) {
    app._models = [].concat((0, _toConsumableArray3.default)(app._models), (0, _toConsumableArray3.default)(models));
  }

  function reducerMiddleware(middleware) {
    app._reducerMiddleware = middleware;
  }

  function start(app) {
    var sagaMiddleware = cSagaMiddleware();
    var store = (0, _createStore2.default)({
      reducers: (0, _reducerBuilder.reducerBuilder)(app._models, onReducer),
      initialState: {},
      sagaMiddleware: sagaMiddleware
    });
    app._store = store;

    store.runSaga = sagaMiddleware.run;
    var sagas = (0, _sagaBuilder.sagaBuilder)(app._models, { onEffect: onEffect, onFetchOption: onFetchOption, history: history });
    sagaMiddleware.run(sagas);
    setupApp(app);
  }
};

/***/ }),

/***/ "./src/client/redux/create-app.js":
/*!****************************************!*\
  !*** ./src/client/redux/create-app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var Routers = _interopRequireWildcard(_reactRouterDom);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _invariant = __webpack_require__(/*! invariant */ "invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _utils = __webpack_require__(/*! ./utils */ "./src/client/redux/utils.js");

var _core = __webpack_require__(/*! ./core */ "./src/client/redux/core.js");

var _core2 = _interopRequireDefault(_core);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import createHashHistory from 'history/createHashHistory';
function createApp() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var onEffect = opts.onEffect,
      onFetchOption = opts.onFetchOption,
      onReducer = opts.onReducer;
  // const history = opts.history || createHashHistory();

  var createOpts = {
    setupApp: function setupApp(app) {
      // app._history = patchHistory(history);
    },

    onEffect: onEffect,
    onFetchOption: onFetchOption,
    onReducer: onReducer
    // history,
  };

  var app = (0, _core2.default)(createOpts);
  var oldAppStart = app.start;
  app.router = router;
  app.start = start;
  return app;

  function start() {
    (0, _invariant2.default)(app._router, '[app.router] router must be registered before app.start()');

    if (!app._store) {
      oldAppStart(app);
    }

    var store = app._store;
    return getProvider(store, app);
  }

  function router(router) {
    (0, _invariant2.default)((0, _utils.isFunction)(router), '[app.router] router should be function, but got ' + (typeof router === 'undefined' ? 'undefined' : (0, _typeof3.default)(router)));
    app._router = router;
  }
}

function getProvider(store, app) {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    app._router(app, Routers)
  );
}

function render(container, store, app) {
  _reactDom2.default.render(getProvider(store, app), container);
}

// function patchHistory(history) {
//   const oldListen = history.listen;
//   history.listen = (callback) => {
//     callback(history.location);
//     return oldListen.call(history, callback);
//   };
//   return history;
// }

exports.default = createApp;

/***/ }),

/***/ "./src/client/redux/createReducer.js":
/*!*******************************************!*\
  !*** ./src/client/redux/createReducer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNil = __webpack_require__(/*! lodash/isNil */ "lodash/isNil");

var _isNil2 = _interopRequireDefault(_isNil);

var _isObject = __webpack_require__(/*! lodash/isObject */ "lodash/isObject");

var _isObject2 = _interopRequireDefault(_isObject);

var _has = __webpack_require__(/*! lodash/has */ "lodash/has");

var _has2 = _interopRequireDefault(_has);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (initialState, handlers) {
  if ((0, _isNil2.default)(initialState)) {
    throw new Error('Initial state is required');
  }

  if ((0, _isNil2.default)(handlers) || !(0, _isObject2.default)(handlers)) {
    throw new Error('Handlers must be an object');
  }

  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    if ((0, _isNil2.default)(action) || !(0, _has2.default)(action, 'type')) {
      return state;
    }

    var handler = handlers[action.type];
    var newState = (0, _isNil2.default)(handler) ? state : handler(state, action);
    if (!action.type.endsWith('_FAIL')) {
      delete newState.error;
    }
    return newState;
  };
};

/***/ }),

/***/ "./src/client/redux/createStore.js":
/*!*****************************************!*\
  !*** ./src/client/redux/createStore.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var reducers = opts.reducers,
      initialState = opts.initialState,
      sagaMiddleware = opts.sagaMiddleware;

  var devtools = function devtools() {
    return function (noop) {
      return noop;
    };
  };
  // if (
  //   process.env.NODE_ENV !== 'production' &&
  //   window.__REDUX_DEVTOOLS_EXTENSION__
  // ) {
  //   devtools = window.__REDUX_DEVTOOLS_EXTENSION__;
  // }
  var middlewares = [sagaMiddleware];
  var enhancers = [_redux.applyMiddleware.apply(undefined, middlewares), devtools()];
  return (0, _redux.createStore)(reducers, initialState, _redux.compose.apply(undefined, enhancers));
};

var _redux = __webpack_require__(/*! redux */ "redux");

/***/ }),

/***/ "./src/client/redux/fetch.js":
/*!***********************************!*\
  !*** ./src/client/redux/fetch.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetch = fetch;

var _isomorphicFetch = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetch(url, options) {
  var finalOptions = Object.assign({ credentials: 'include' }, options);
  return (0, _isomorphicFetch2.default)(url, finalOptions);
}

/***/ }),

/***/ "./src/client/redux/reducerBuilder.js":
/*!********************************************!*\
  !*** ./src/client/redux/reducerBuilder.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");

var _extends5 = _interopRequireDefault(_extends4);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _toArray2 = __webpack_require__(/*! babel-runtime/helpers/toArray */ "babel-runtime/helpers/toArray");

var _toArray3 = _interopRequireDefault(_toArray2);

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports.reducerBuilder = reducerBuilder;
exports.initialReducerGroup = initialReducerGroup;

var _redux = __webpack_require__(/*! redux */ "redux");

var _createReducer = __webpack_require__(/*! ./createReducer */ "./src/client/redux/createReducer.js");

var _createReducer2 = _interopRequireDefault(_createReducer);

var _invariant = __webpack_require__(/*! invariant */ "invariant");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reducerBuilder(options, onReducer) {
  var reducers = {};
  var reducerGroups = new Map();
  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      var reducer = options[key];
      if (reducer instanceof Array) {
        collectReducers(reducerGroups, reducer);
      } else {
        reducers[key] = reducer;
      }
    }
  }
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = reducerGroups.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = (0, _slicedToArray3.default)(_step.value, 2),
          _key = _step$value[0],
          reducerGroup = _step$value[1];

      if (reducers.hasOwnProperty(_key)) {
        throw Error('Duplicate key ' + _key);
      }
      reducers[_key] = initialReducerGroup(reducerGroup, onReducer);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return (0, _redux.combineReducers)(reducers);
}

function collectReducers(reducerGroups, reducers) {
  reducers.forEach(function (reducer) {
    var keys = reducer.key.split('.');

    var _keys = (0, _toArray3.default)(keys),
        groupKey = _keys[0],
        subKeys = _keys.slice(1);

    var group = reducerGroups.get(groupKey);
    if (!group) {
      group = new Map();
      reducerGroups.set(groupKey, group);
    }
    if (subKeys.length === 0) {
      reducer.single = true;
    } else {
      reducer.subKeys = subKeys;
    }
    if (group.has(reducer.key) && !reducer.single) {
      throw Error('Duplicate key ' + reducer.key);
    }
    group.set(reducer.key, reducer);
  });
}

function initialReducerGroup(reducerGroup, onReducer) {
  var handlers = {};
  var initialState = {};
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    var _loop = function _loop() {
      var reducer = _step2.value;

      if (!reducer.resultKey) {
        reducer.resultKey = 'result';
      }
      if (reducer.single) {
        initialState = reducer.initialState || {};
      } else {
        overrideState(initialState, reducer.subKeys, reducer.initialState);
      }
      var reducerAction = reducer.action;
      if (!reducerAction) {
        reducerAction = reducer.key;
      }
      (0, _invariant2.default)(reducerAction, '[reducer.key] reducer key is not empty');
      var isFunc = typeof onReducer === 'function';
      handlers[reducerAction] = reducerHandler(reducer, 'loading', function (state, action) {
        var _extends2;

        var payload = action.payload,
            other = (0, _objectWithoutProperties3.default)(action, ['payload']);

        delete other.type;
        var newState = (0, _extends5.default)((_extends2 = {}, (0, _defineProperty3.default)(_extends2, reducer.resultKey, null), (0, _defineProperty3.default)(_extends2, 'payload', payload), (0, _defineProperty3.default)(_extends2, 'success', false), (0, _defineProperty3.default)(_extends2, 'loading', true), (0, _defineProperty3.default)(_extends2, 'fromSocket', false), _extends2), other);
        if (isFunc) {
          newState = onReducer(newState, state, action, 'loading');
        }
        return newState;
      });
      handlers[reducerAction + '_SUCCESS'] = reducerHandler(reducer, 'success', function (state, action) {
        var done = action.done,
            fromSocket = action.fromSocket,
            result = action.result,
            payload = action.payload,
            other = (0, _objectWithoutProperties3.default)(action, ['done', 'fromSocket', 'result', 'payload']);

        delete other.type;
        var newState = {};
        if (fromSocket && done) {
          newState = result;
        } else {
          var _extends3;

          newState = (0, _extends5.default)((_extends3 = {}, (0, _defineProperty3.default)(_extends3, reducer.resultKey, result), (0, _defineProperty3.default)(_extends3, 'payload', payload), (0, _defineProperty3.default)(_extends3, 'success', true), (0, _defineProperty3.default)(_extends3, 'loading', false), (0, _defineProperty3.default)(_extends3, 'fromSocket', fromSocket), _extends3), other);
        }
        if (isFunc) {
          newState = onReducer(newState, state, action, 'success');
        }
        return newState;
      });
      handlers[reducerAction + '_FAIL'] = reducerHandler(reducer, 'fail', function (state, action) {
        var payload = action.payload,
            error = action.error,
            other = (0, _objectWithoutProperties3.default)(action, ['payload', 'error']);

        delete other.type;
        var newState = (0, _extends5.default)({
          payload: payload,
          error: error,
          success: false,
          loading: false,
          fromSocket: false
        }, other);
        if (isFunc) {
          newState = onReducer(newState, state, action, 'fail');
        }
        return newState;
      });
    };

    for (var _iterator2 = reducerGroup.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return (0, _createReducer2.default)(initialState, handlers);
}

function overrideState(state, keys) {
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var length = keys.length;
  if (length === 1) {
    return state[keys[0]] = value;
  }
  var previous = state;
  for (var i = 0; i < length; ++i) {
    if (i === length - 1) {
      previous[keys[i]] = value;
    } else {
      var next = previous[keys[i]];
      if (!next) {
        next = previous[keys[i]] = {};
      }
      previous = next;
    }
  }
}

function reducerHandler(reducer, method, handler) {
  return function (state, action) {
    var result = void 0;
    if (reducer[method]) {
      result = reducer[method](state, action);
    } else {
      result = handler(state, action);
    }
    if (reducer.single) {
      state = result;
    } else {
      state = (0, _extends5.default)({}, state);
      overrideState(state, reducer.subKeys, result);
    }
    return state;
  };
}

/***/ }),

/***/ "./src/client/redux/sagaBuilder.js":
/*!*****************************************!*\
  !*** ./src/client/redux/sagaBuilder.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.sagaBuilder = sagaBuilder;
exports.createSaga = createSaga;

var _effects = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");

var effects = _interopRequireWildcard(_effects);

var _reduxSaga = __webpack_require__(/*! redux-saga */ "redux-saga");

var _fetch = __webpack_require__(/*! ./fetch */ "./src/client/redux/fetch.js");

var Fetch = _interopRequireWildcard(_fetch);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sagaBuilder(options, args) {
  var sagaArr = [];
  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      var value = options[key];
      if (value instanceof Array) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (item.url) {
              sagaArr.push(createSaga(item, args));
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        sagaArr.push(value);
      }
    }
  }
  return (/*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, saga;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _iteratorNormalCompletion2 = true;
              _didIteratorError2 = false;
              _iteratorError2 = undefined;
              _context.prev = 3;
              _iterator2 = sagaArr[Symbol.iterator]();

            case 5:
              if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                _context.next = 12;
                break;
              }

              saga = _step2.value;
              _context.next = 9;
              return effects.fork(saga);

            case 9:
              _iteratorNormalCompletion2 = true;
              _context.next = 5;
              break;

            case 12:
              _context.next = 18;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context['catch'](3);
              _didIteratorError2 = true;
              _iteratorError2 = _context.t0;

            case 18:
              _context.prev = 18;
              _context.prev = 19;

              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }

            case 21:
              _context.prev = 21;

              if (!_didIteratorError2) {
                _context.next = 24;
                break;
              }

              throw _iteratorError2;

            case 24:
              return _context.finish(21);

            case 25:
              return _context.finish(18);

            case 26:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[3, 14, 18, 26], [19,, 21, 25]]);
    })
  );
}

function bodyHandler(data, type, method) {
  if (method !== 'get' && data) {
    if (type === 'json') {
      return JSON.stringify(data);
    } else if (type === 'from') {
      var pairs = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var key = _step3.value;

          pairs.push(key + '=' + data[key]);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return pairs.join('&');
    }
  }
  return data;
}

function getEffect(item) {
  return (/*#__PURE__*/_regenerator2.default.mark(function baseEffect(_ref, _ref2) {
      var payload = _ref.payload;
      var fetch = _ref2.fetch,
          option = _ref2.option;
      return _regenerator2.default.wrap(function baseEffect$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch(item.url(payload), option);

            case 2:
              return _context2.abrupt('return', _context2.sent);

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, baseEffect, this);
    })
  );
}

function createSaga(item, _ref3) {
  var onEffect = _ref3.onEffect,
      onFetchOption = _ref3.onFetchOption,
      history = _ref3.history;

  var action = item.action || item.key;
  return (/*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var take;
      return _regenerator2.default.wrap(function _callee3$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              take = item.takeEvery || effects.takeEvery;
              _context4.next = 3;
              return take(action, /*#__PURE__*/_regenerator2.default.mark(function _callee2(actions) {
                var response, effect, putAction, type, bodyParser, option;
                return _regenerator2.default.wrap(function _callee2$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        response = void 0;
                        effect = item.effect || getEffect(item);
                        putAction = {
                          type: action,
                          payload: actions.payload
                        };
                        _context3.prev = 3;
                        type = item.type || 'json';
                        bodyParser = item.body || bodyHandler;
                        option = createOptions(item.method, type, item.headers, bodyParser(actions.payload, type, item.method));

                        if (typeof onFetchOption === 'function') {
                          option = onFetchOption(option, item);
                        }
                        _context3.next = 10;
                        return effect.apply(undefined, [actions, { fetch: Fetch.fetch, option: option }].concat((0, _toConsumableArray3.default)(effects), [item]));

                      case 10:
                        response = _context3.sent;
                        _context3.next = 22;
                        break;

                      case 13:
                        _context3.prev = 13;
                        _context3.t0 = _context3['catch'](3);

                        putAction.success = false;
                        putAction.loading = false;
                        putAction.result = null;
                        putAction.message = _context3.t0 || '请求异常';
                        putAction.type = putAction.type + '_FAIl';
                        _context3.next = 22;
                        return effects.put(putAction);

                      case 22:
                        if (!response) {
                          _context3.next = 39;
                          break;
                        }

                        if (!(typeof onEffect === 'function')) {
                          _context3.next = 30;
                          break;
                        }

                        putAction.url = item.url(actions.payload);
                        _context3.next = 27;
                        return onEffect(putAction, response, effects, history);

                      case 27:
                        putAction = _context3.sent;
                        _context3.next = 36;
                        break;

                      case 30:
                        putAction.loading = false;
                        putAction.success = response.status === 200;
                        putAction.status = response.status;
                        _context3.next = 35;
                        return response.json();

                      case 35:
                        putAction.result = _context3.sent;

                      case 36:
                        putAction.type = '' + putAction.type + (putAction.success ? '_SUCCESS' : '_FAIL');
                        _context3.next = 39;
                        return effects.put(putAction);

                      case 39:
                      case 'end':
                        return _context3.stop();
                    }
                  }
                }, _callee2, this, [[3, 13]]);
              }));

            case 3:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee3, this);
    })
  );
}

function createOptions(method, type, extHeaders, payload) {
  var options = { method: method };
  options.headers = extHeaders || {
    'Accept': 'application/json',
    'Content-Type': type === 'json' ? 'application/json' : 'application/x-www-form-urlencoded'
  };
  if (method !== 'get') {
    options.body = payload;
  }
  return options;
}

/***/ }),

/***/ "./src/client/redux/utils.js":
/*!***********************************!*\
  !*** ./src/client/redux/utils.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onEffect = exports.onError = exports.isArray = exports.isString = exports.isFunction = undefined;

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.isHTMLElement = isHTMLElement;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isFunction = exports.isFunction = function isFunction(o) {
  return typeof o === 'function';
};
var isString = exports.isString = function isString(o) {
  return typeof o === 'string';
};
var isArray = exports.isArray = Array.isArray.bind(Array);

function isHTMLElement(node) {
  return (typeof node === 'undefined' ? 'undefined' : (0, _typeof3.default)(node)) === 'object' && node !== null && node.nodeType && node.nodeName;
}

var onError = exports.onError = function onError(app, _onError) {
  return function (err) {
    if (err) {
      if (typeof err === 'string') {
        err = new Error(err);
      }
      if (_onError && typeof _onError === 'function') {
        _onError(err, app._store.dispatch);
        throw new Error(err.stack || err);
      }
    }
  };
};
var onEffect = exports.onEffect = function onEffect() {};

/***/ }),

/***/ "./src/client/render-server.js":
/*!*************************************!*\
  !*** ./src/client/render-server.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _app = __webpack_require__(/*! ./app */ "./src/client/app.js");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 导出渲染函数，以给采用 Nodejs 编写的 HTTP 服务器代码调用
module.exports = function render() {
  // 把根组件渲染成 HTML 字符串
  return (0, _server.renderToString)(_app2.default);
};

/***/ }),

/***/ "./src/client/routes/index.js":
/*!************************************!*\
  !*** ./src/client/routes/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");

var _button2 = _interopRequireDefault(_button);

__webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    'hello world new app ',
    _react2.default.createElement(
      _button2.default,
      null,
      '\u786E\u5B9A'
    )
  );
};

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/button/style":
/*!****************************************!*\
  !*** external "antd/lib/button/style" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style");

/***/ }),

/***/ "babel-runtime/helpers/defineProperty":
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/defineProperty" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),

/***/ "babel-runtime/helpers/extends":
/*!************************************************!*\
  !*** external "babel-runtime/helpers/extends" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),

/***/ "babel-runtime/helpers/objectWithoutProperties":
/*!****************************************************************!*\
  !*** external "babel-runtime/helpers/objectWithoutProperties" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),

/***/ "babel-runtime/helpers/slicedToArray":
/*!******************************************************!*\
  !*** external "babel-runtime/helpers/slicedToArray" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),

/***/ "babel-runtime/helpers/toArray":
/*!************************************************!*\
  !*** external "babel-runtime/helpers/toArray" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toArray");

/***/ }),

/***/ "babel-runtime/helpers/toConsumableArray":
/*!**********************************************************!*\
  !*** external "babel-runtime/helpers/toConsumableArray" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),

/***/ "babel-runtime/helpers/typeof":
/*!***********************************************!*\
  !*** external "babel-runtime/helpers/typeof" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "invariant":
/*!****************************!*\
  !*** external "invariant" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("invariant");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "lodash/has":
/*!*****************************!*\
  !*** external "lodash/has" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/has");

/***/ }),

/***/ "lodash/isNil":
/*!*******************************!*\
  !*** external "lodash/isNil" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isNil");

/***/ }),

/***/ "lodash/isObject":
/*!**********************************!*\
  !*** external "lodash/isObject" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isObject");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=bundle_server.js.map