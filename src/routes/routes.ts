import React from 'react';

const Home = React.lazy(() => import('~/pages/Home/views/Home'));
const Login = React.lazy(() => import('~/pages/Auth/views/Login'));
const Register = React.lazy(() => import('~/pages/Auth/views/Register'));

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
  {
    path: '/register',
    exact: true,
    element: Register,
  },
];

export default routes;
