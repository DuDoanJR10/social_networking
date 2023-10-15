import { Spin } from 'antd';
import routes from '~/routes/routes';
import React, { Suspense } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';

const PermissionContent = () => {
  let access = true;
  return access ? (
    <Routes>
      {routes.map((route: any, idx: number) => {
        return (
          route.component && (
            <Route
              key={idx}
              path={route.path}
              element={
                <Suspense fallback={<Spin />}>
                  <route.element />
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
