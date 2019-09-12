import {
  withStateHandlers,
  compose
} from 'recompose';

export default compose(
  withStateHandlers(
    {
      userData: {}
    },
    {
      setUserData: ({ userData }) => extraData => ({
        userData: {
          ...userData,
          ...extraData
        }
      })
    }
  )
);