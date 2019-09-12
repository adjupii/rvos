import {
  withStateHandlers,
  compose
} from 'recompose';

export default compose(
  withStateHandlers(
    {
      userEmail: ''
    },
    {
      setUserEmail: () => userEmail => ({ userEmail })
    }
  )
);