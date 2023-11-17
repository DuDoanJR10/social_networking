import React from 'react';
import '../styles/Login.scss';
import { Link } from 'react-router-dom';
import Form_login from '../../../components/form_login';
import Login_phone from '../../../components/login_phone';
import Footer_login from '~/components/footer_login';
import Content_right_login from '~/components/content_right_login';
// import { DownOutlined } from '@ant-design/icons ';
const Login = () => {
  return (
    <div className="wrap">
      <div className="content">
        <div className="content_left">
          <Login_phone />
        </div>
        <div className="content_right">
          <Content_right_login />
        </div>
      </div>
      <div className="footer">
        <Footer_login />
      </div>
    </div>
  );
};

export default Login;
