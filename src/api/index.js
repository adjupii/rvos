import axios from 'axios';

import { getToken } from 'app/cookies';
import history from 'app/history';
import store from 'app/store';
import { logOut } from 'app/Redux/actions/user';
import { setSignPage } from 'app/Redux/actions/sign';
import { notifications } from 'app/components/common/Notifications';

const instance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.API_URL
});

instance.interceptors.request.use(config => {
  const token = getToken();

  if (token) {
    config.headers.common.Authorization = `Bearer ${token}`;
  }

  return config;
});

instance.interceptors.response.use(
  response => response,
  error => {
    const data = error.response && error.response.data;
    const method = error.response && error.response.config.method;

    if (data && (data.code === 401)) {
      const {
        location: { pathname },
        push
      } = history;

      if (pathname !== '/sign/in') {
        // TODO: rewrite sign pages logic with internal state instead of redux store
        store.dispatch(setSignPage('sign-in-log-in'));
        push('/sign/in');
        store.dispatch(logOut());
      }
    }
    if(method !== 'get'){
      if (data && (data.code === 500)) {
        notifications.create({
          message: 'There was a server operation error, please try to update status a little bit later.',
          type: 'error'
        })();
      }
    }

    return Promise.reject(data || {});
  }
);

export default instance;