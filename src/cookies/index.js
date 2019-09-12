import Cookies from 'js-cookie';

const TOKEN_NAME = 'token';

function setToken(token) {
  Cookies.set(TOKEN_NAME, token);
}

function getToken() {
  return Cookies.get(TOKEN_NAME);
}

function deleteToken() {
  Cookies.remove(TOKEN_NAME);
}

export {
  setToken,
  getToken,
  deleteToken
};