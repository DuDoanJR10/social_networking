import { getCookie } from '~/helpers/cookie';
import { APP_CONFIG } from './constant';

export const getAccessToken = () => {
  return getCookie(APP_CONFIG.accessToken) || null;
};

export const getAuth = () => {
  return JSON.parse(getCookie(APP_CONFIG.currentUser)) || null;
};

export const isLogin = () => {
  const token = getCookie(APP_CONFIG.currentUser);
  const authInfo = getCookie(APP_CONFIG.currentUser);
  return token && authInfo;
};
