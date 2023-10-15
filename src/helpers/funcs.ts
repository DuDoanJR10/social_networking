export const getCookie = (key: any) => {
  let nameCookie = key + '';
  let allCookies = decodeURIComponent(document.cookie);
  let arrayCookies = allCookies.split(';');
  for (let i = 0; i < arrayCookies.length; i++) {
    let cookie = arrayCookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(nameCookie) === 0) {
      return cookie.substring(nameCookie.length + 1, cookie.length);
    }
  }
  return '';
};

export const saveCookie = (name: string, value: any, expiredDay: number) => {
  let date = new Date();
  date.setTime(date.getTime() + expiredDay * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
};

export const delCookie = (nameCookie: string) => {
  document.cookie = nameCookie + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

// Check Empty Data
export const isEmpty = (value: any) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
};
