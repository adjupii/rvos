import { handleActions } from 'redux-actions';

import actions from 'app/Redux/actions/contact-us';

const {
  contactUs: {
    topics,
    sendRequest
  }
} = actions;

const requestTopics = handleActions(
  {
    [topics.fetching]: (state, { payload }) => ({
      ...state,
      isFetching: payload
    }),

    [topics.setData]: (state, { payload }) => ({
      ...state,
      data: payload
    })
  },
  {
    isFetching: false,
    data: []
  }
);

const requestSuccess = handleActions(
  {
    [sendRequest.fetching]: (state, { payload }) => ({
      ...state,
      isFetching: payload
    }),

    [sendRequest.setData]: (state, { payload }) => ({
      ...state,
      data: payload
    })
  },
  {
    isFetching: false,
    data: []
  }
);


export {
  requestTopics,
  requestSuccess
};