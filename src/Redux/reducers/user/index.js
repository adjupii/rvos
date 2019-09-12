import { handleActions } from 'redux-actions';
import actions from 'app/Redux/actions/user';

const {
  user: {
    data,
    avatar
  }
} = actions;

const user = handleActions(
  {
    [data.fetching]: (state, { payload }) => ({
      ...state,
      isFetching: payload
    }),

    [data.setData]: (state, { payload }) => ({
      ...state,
      data: payload
    }),

    [data.setUserParam]: (state, { payload }) => ({
      ...state,
      data: {
        ...state.data,
        ...payload
      }
    }),

    [data.clearData]: () => ({
      isFetching: false
    })
  },
  {
    isFetching: false
  }
);

const uploadAvatar = handleActions(
  {
    [avatar.fetching]: (state, { payload }) => ({
      ...state,
      isFetching: payload
    })
  },
  {
    isFetching: false
  }
);

export {
  user,
  uploadAvatar
};