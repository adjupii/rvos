import {
  compose,
  lifecycle
} from 'recompose';

import { setToken } from 'app/cookies';

export default compose(
  lifecycle({
    componentDidMount() {
      const {
        match: {
          params: { token }
        }
      } = this.props;

      setToken(token);
    }
  })
);