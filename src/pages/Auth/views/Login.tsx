import React from 'react';
import '../styles/Login.scss';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>{t('common.login')}</div>
    </div>
  );
};

export default Login;
