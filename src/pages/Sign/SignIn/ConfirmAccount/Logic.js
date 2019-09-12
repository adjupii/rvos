import {
  withHandlers,
  withStateHandlers,
  compose
} from 'recompose';

import { resendToken } from 'app/api/sign-up';

export default compose(
  withStateHandlers(
    {
      isFetching: false,
      status: null
    },
    {
      setFetching: () => (isFetching) => ({ isFetching }),
      setStatus: () => (status) => ({ status })
    }
  ),

  withHandlers({
    handleResendToken: ({
      setFetching,
      setStatus,
      userEmail
    }) => () => {
      setFetching(true);

      resendToken(userEmail)
        .then(() => {
          setFetching(false);
          setStatus(200);
        })
        .catch(error => {
          setFetching(false);
          setStatus(error.code);
        });
    }
  })
);