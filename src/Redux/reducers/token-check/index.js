import * as ActionTypes from 'app/Redux/constants/token-check';

const initialState = {
  isFetching: false,
  status: null
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.SET_FETCHING:
      return {
        ...state,
        isFetching: payload
      };

    case ActionTypes.SET_STATUS:
      return {
        ...state,
        status: payload
      };

    default:
      return state;
  }
}