// export const env: keyof typeof SERVER_LIST = 'opt';
export const env: keyof typeof SERVER_LIST = 'dev';
// export const env: keyof typeof SERVER_LIST = 'local';

const SERVER_LIST = {
  opt: 'https://instastoryview.co.kr',
  dev: 'http://43.202.53.0:8080',
  local: 'http://192.168.1.114:8080',
};

export const SERVER = SERVER_LIST[env];

export const API_SERVER = `${SERVER}/api/v1`;

export const recaptchaServerKey = '6LfAorspAAAAAKwRZmQlFcTQQARh8RBYkCTLiAsk';
export const recaptchaSecretKey = '6LfAorspAAAAAEWDfq45XB7NFQfcAhAsVAgSysIe';
export const turnstileSiteKey = '0x4AAAAAAAeRAm2aMX_9fX4D';
export const turnstileSecretKey = '0x4AAAAAAAeRAleHBw5UNUgogWau_BZxXOo';
