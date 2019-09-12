import * as ActionTypes from 'app/Redux/constants/sign';

export const setSignPage = page => ({
  type: ActionTypes.SET_SIGN_PAGE,
  payload: page
});

export const setUsername = username => ({
  type: ActionTypes.SET_USERNAME,
  payload: username
});