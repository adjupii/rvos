import { createActions } from 'redux-actions';
import keyBy from 'lodash/keyBy';

import { deleteToken } from 'app/cookies';

import * as api from 'app/api/user';

const actions = createActions({
  USER: {
    DATA: {
      FETCHING: null,
      SET_DATA: null,
      SET_USER_PARAM: null,
      CLEAR_DATA: null
    },

    AVATAR: {
      FETCHING: null
    }
  }
});

const {
  user: {
    data: {
      setUserParam,
      ...data
    },
    avatar
  }
} = actions;

const getUser = () => dispatch => {
  dispatch(data.fetching(true));

  Promise.all([
    api.getUser(),
    api.getSettings()
  ])
    .then(([
      user,
      settings
    ]) => {
      dispatch(data.fetching(false));
      dispatch(
        data.setData({
          ...user,
          settings: keyBy(settings, 'name')
        })
      );
    })
    .catch(() => {
      dispatch(data.fetching(false));
    });
};

const uploadAvatar = (image, fileIndex, setStatus) => dispatch => {
  dispatch(avatar.fetching(true));

  const request = api.uploadAvatar(image, fileIndex, setStatus);

  request
    .then(({ image }) => {
      dispatch(setUserParam({ avatar: image }));
      dispatch(avatar.fetching(false));
    })
    .catch(() => {
      dispatch(avatar.fetching(false));
    });

  return request;
};

const logOut = () => dispatch => {
  deleteToken();
  dispatch(data.clearData());
};

export {
  getUser,
  uploadAvatar,
  setUserParam,
  logOut
};

export default actions;