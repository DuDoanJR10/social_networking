import React from 'react';
import '../styles/Register.scss';
import { useTranslation } from 'react-i18next';

const Register = () => {
  const { t } = useTranslation('translation');
  return (
    <div>
      <div>{t('common.register')}</div>
    </div>
  );
};

export default Register;
