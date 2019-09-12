import reducer from 'app/Redux/reducers/sign';
import * as ActionTypes from 'app/Redux/constants/sign';

describe('sign reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(
        undefined,
        {}
      )
    ).toEqual({
      page: 'sign-in-log-in',
      username: undefined
    });
  });

  it('should handle SET_SIGN_PAGE', () => {
    expect(
      reducer(
        {
          page: 'sign-in-log-in',
          username: undefined
        },
        {
          type: ActionTypes.SET_SIGN_PAGE,
          payload: 'sign-in-confirm-account'
        }
      )
    ).toEqual({
      page: 'sign-in-confirm-account',
      username: undefined
    });
  });

  it('should handle SET_USERNAME', () => {
    expect(
      reducer(
        {
          page: 'sign-in-log-in',
          username: undefined
        },
        {
          type: ActionTypes.SET_USERNAME,
          payload: 'username'
        }
      )
    ).toEqual({
      page: 'sign-in-log-in',
      username: 'username'
    });
  });
});