import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import app from './app';

const history = createHistory();

const render = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;

// 把根组件渲染到 DOM 树上
render(app({ history }), window.document.getElementById('app'));
