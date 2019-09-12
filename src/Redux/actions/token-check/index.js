import * as ActionTypes from 'app/Redux/constants/token-check';

export const setFetching = isFetching => ({
  type: ActionTypes.SET_FETCHING,
  payload: isFetching
});

export const setStatus = status => ({
  type: ActionTypes.SET_STATUS,
  payload: status
});