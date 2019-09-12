import * as ActionTypes from 'app/Redux/constants/sign';

const initialState = {
  page: 'sign-in-log-in',
  username: undefined
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.SET_SIGN_PAGE:
      return {
        ...state,
        page: payload
      };

    case ActionTypes.SET_USERNAME:
      return {
        ...state,
        username: payload
      };

    default:
      return state;
  }
}