import {
  withStateHandlers,
  compose
} from 'recompose';

export default compose(
  withStateHandlers(
    ({ type = 'text' }) => ({ type }),
    {
      changeType: ({ type }) => () => ({
        type: type === 'password' ? 'text' : 'password'
      })
    }
  )
);