import React from 'react';

const Home = React.lazy(() => import('~/pages/Home/views/Home'));
const Login = React.lazy(() => import('~/pages/Auth/views/Login'));

const routes = [
  {
    path: '/',
    exact: true,
    element: Home,
  },
  {
    path: '/login',
    exact: true,
    element: Login,
  },
];

export default routes;
