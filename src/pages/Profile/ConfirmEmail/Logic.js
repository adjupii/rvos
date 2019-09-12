import {
  compose,
  lifecycle
} from 'recompose';

import { confirmEmail } from 'app/api/user';
import { notifications } from 'app/components/common/Notifications';

export default compose(
  lifecycle({
    componentDidMount() {
      const {
        match: {
          params: { token }
        },
        history
      } = this.props;

      let message;

      confirmEmail(token)
        .then(() => {
          message = 'New email is confirmed';
        })
        .catch(() => {
          message = 'Your changing email link has expired or has been damaged. Change your email again';
        })
        .finally(() => {
          history.push('/app/profile');

          const notify = notifications.create({ message });

          notify();
        });
    }
  })
);