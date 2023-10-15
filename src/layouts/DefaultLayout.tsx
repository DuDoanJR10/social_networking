import React, { Suspense } from 'react';
import { Layout, Spin } from 'antd';
import './styles/DefaultLayout.scss';

const { Content } = Layout;
const Header = React.lazy(() => import('./Header'));
const Footer = React.lazy(() => import('./Footer'));
const Sidebar = React.lazy(() => import('./Sidebar'));
const loading = () => <Spin />;

const DefaultLayout = () => {
    return (
        <Layout className="site-layout" style={{ minHeight: '100vh' }}>
            <Suspense fallback={loading()}>
                <Header />
            </Suspense>
            <Layout className="main-layout">
                <Suspense fallback={loading()}>
                    <Sidebar />
                </Suspense>
                <Suspense fallback={loading()}>{/* <Header /> */}</Suspense>
                <Content style={{ overflow: 'initial' }}>
                    <div className="bg-main position-rel">
                        <Suspense fallback={loading()}>
                            {/* <PermissionContent /> */}
                        </Suspense>
                    </div>
                </Content>
                <Suspense fallback={loading()}>
                    <Footer />
                </Suspense>
            </Layout>
        </Layout>
    );
};

export default DefaultLayout;
