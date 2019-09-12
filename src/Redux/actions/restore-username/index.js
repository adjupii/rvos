import * as actions from 'app/Redux/actions/token-check';
import * as api from 'app/api/restore-username';
import { setUsername } from 'app/Redux/actions/sign';

export const tokenCheck = (token, history) => dispatch => {
  dispatch(actions.setFetching(true));

  api.tokenCheck(token)
    .then(() => {
      api.usernameByToken(token)
        .then(({ username }) => {
          dispatch(setUsername(username));

          history.push('/sign/in');
        });
    })
    .catch(error => {
      dispatch(actions.setFetching(false));
      dispatch(actions.setStatus(error.code));
    });
};