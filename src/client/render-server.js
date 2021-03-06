import React from 'react';
import { renderToString } from 'react-dom/server';
import createHistory from 'history/createMemoryHistory';
import app from './app-server';

const history = createHistory();

// 导出渲染函数，以给采用 Nodejs 编写的 HTTP 服务器代码调用
module.exports = async function render({url, logger}) {
  // 把根组件渲染成 HTML 字符串
  const {container, initialState} = await app({history, url, logger});
  return {
    content: renderToString(container),
    initialState,
  };
};
