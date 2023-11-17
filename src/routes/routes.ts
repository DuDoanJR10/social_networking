import React from 'react';
import configs from '../configs';
export interface Route {
  path: string;
  exact: boolean;
  element: React.LazyExoticComponent<() => JSX.Element>;
  footer?: boolean;
}

const Home = React.lazy(() => import('~/pages/Home/views/Home'));
const User = React.lazy(() => import('~/pages/User/views/User'));

const routes: Route[] = [
  {
    path: configs.routes.home,
    exact: true,
    element: Home,
  },
  {
    path: configs.routes.user,
    exact: true,
    element: User,
    footer: true,
  },
];

export default routes;
