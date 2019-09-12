import reducer from 'app/Redux/reducers/token-check';
import * as ActionTypes from 'app/Redux/constants/token-check';

describe('token check reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(
        undefined,
        {}
      )
    ).toEqual({
      isFetching: false,
      status: null
    });
  });

  it('should handle SET_FETCHING', () => {
    expect(
      reducer(
        {
          isFetching: false,
          status: null
        },
        {
          type: ActionTypes.SET_FETCHING,
          payload: true
        }
      )
    ).toEqual({
      isFetching: true,
      status: null
    });
  });

  it('should handle SET_STATUS', () => {
    expect(
      reducer(
        {
          isFetching: false,
          status: null
        },
        {
          type: ActionTypes.SET_STATUS,
          payload: 200
        }
      )
    ).toEqual({
      isFetching: false,
      status: 200
    });
  });
});