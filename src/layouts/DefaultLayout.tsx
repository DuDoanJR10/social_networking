import React, { Suspense } from 'react';
import { Layout, Spin } from 'antd';
import './styles/DefaultLayout.scss';
import { Navigate } from 'react-router-dom';
import { isLogin } from '~/utils/jwt';
import PermissionContent from '~/middlewares/PermissionContent';

const Header = React.lazy(() => import('./Header'));
const Footer = React.lazy(() => import('./Footer'));
const Sidebar = React.lazy(() => import('./Sidebar'));

const loading = () => <Spin />;
const { Content } = Layout;

const DefaultLayout = () => {
  const isAuth = isLogin();

  return isAuth ? (
    <Layout className="site-layout" style={{ minHeight: '100vh' }}>
      <Suspense fallback={loading()}>
        <Header />
      </Suspense>
      <Layout className="main-layout">
        <Suspense fallback={loading()}>
          <Sidebar />
        </Suspense>
        <Content style={{ overflow: 'initial' }}>
          <div className="bg-main position-rel">
            <Suspense fallback={loading()}>
              <PermissionContent />
            </Suspense>
          </div>
        </Content>
        <Suspense fallback={loading()}>
          <Footer />
        </Suspense>
      </Layout>
    </Layout>
  ) : (
    <Navigate to="/login" />
  );
};

export default DefaultLayout;
