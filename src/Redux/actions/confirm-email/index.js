import * as actions from 'app/Redux/actions/token-check';
import * as api from 'app/api/sign-up';

export const tokenCheck = token => dispatch => {
  dispatch(actions.setFetching(true));

  api.tokenCheck(token)
    .then(() => {
      dispatch(actions.setFetching(false));
      dispatch(actions.setStatus(200));
    })
    .catch(error => {
      dispatch(actions.setFetching(false));
      dispatch(actions.setStatus(error.code));
    });
};