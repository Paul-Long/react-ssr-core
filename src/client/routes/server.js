import React from 'react';
import { renderRoutes } from 'react-router-config';
import App from '@containers/app';
import Login from '@containers/login';
import Charts from '@containers/charts';
import Home from '@containers/home';
import Help from '@containers/help';
import About from '@containers/about';
import Users from '@containers/users';
import CosFile from '@containers/cosfile';

const AppWrap = ({route, ...props}) => {
  return (
    <App {...props}>
      {renderRoutes(route.routes)}
    </App>
  );
};
export default () => {
  return [
    {
      path: '/login',
      exact: true,
      component: Login,
    },
    {
      path: '/',
      component: AppWrap,
      routes: [
        {path: '/charts', exact: true, component: Charts},
        {path: '/help', exact: true, component: Help},
        {path: '/about', exact: true, component: About},
        {path: '/home', exact: true, component: Home},
        {path: '/users', exact: true, component: Users},
        {path: '/cosFile', exact: true, component: CosFile},
      ]
    }
  ];
}
