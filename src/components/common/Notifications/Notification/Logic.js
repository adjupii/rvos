import {
  lifecycle,
  withHandlers,
  defaultProps,
  compose
} from 'recompose';

export default compose(
  defaultProps({
    timeout: 4000
  }),

  withHandlers(() => {
    let _timeout;

    return {
      setTimeout: ({ closeNotify, timeout }) => () => {
        _timeout = setTimeout(closeNotify, timeout);
      },

      clearTimeout: () => () => {
        clearTimeout(_timeout);
      }
    };
  }),

  lifecycle({
    componentDidMount() {
      const {
        timeout,
        setTimeout
      } = this.props;

      if (timeout) {
        setTimeout();
      }
    },

    componentWillUnmount() {
      const {
        timeout,
        clearTimeout
      } = this.props;

      if (timeout) {
        clearTimeout();
      }
    }
  })
);