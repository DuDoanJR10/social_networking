import { Spin, Layout } from 'antd';
import routes, { Route as RouteConfig } from '~/routes/routes';
import React, { Suspense } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';

const Footer = React.lazy(
  () => import('../layouts/components/FooterComponent'),
);

const { Content } = Layout;

const PermissionContent = () => {
  let access = true;

  // Check permissions

  return access ? (
    <Routes>
      {routes.map((route: RouteConfig, idx: number) => {
        return (
          route.element && (
            <Route
              key={idx}
              path={route.path}
              element={
                <Suspense fallback={<Spin />}>
                  <Content>
                    <route.element />
                  </Content>
                  {route.footer ? <Footer /> : <></>}
                </Suspense>
              }
            />
          )
        );
      })}
    </Routes>
  ) : (
    <Navigate to="/" />
  );
};

export default PermissionContent;
