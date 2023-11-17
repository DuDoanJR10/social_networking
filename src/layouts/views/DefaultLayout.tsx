import React, { Suspense } from 'react';
import { Layout, Spin } from 'antd';
import '../styles/DefaultLayout.scss';
import { Navigate } from 'react-router-dom';
import PermissionContent from '~/middlewares/PermissionContent';
// import { isLogin } from '~/utils/jwt';

const Sidebar = React.lazy(() => import('../components/SidebarComponent'));

const loading = () => <Spin />;

const DefaultLayout = () => {
  // let isAuth = isLogin();

  return true ? (
    <Layout className="min-h-screen">
      <Suspense fallback={loading()}>
        <Sidebar />
      </Suspense>
      <Layout>
        <Suspense fallback={loading()}>
          <PermissionContent />
        </Suspense>
      </Layout>
    </Layout>
  ) : (
    <Navigate to="/login" />
  );
};

export default DefaultLayout;
