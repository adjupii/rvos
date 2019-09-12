import { compose } from 'recompose';
import { withFormik } from 'formik';

import { emailSend as passwordRecovery } from 'app/api/restore-password';
import { emailSend as usernameRecovery } from 'app/api/restore-username';
import { forgotData as schema } from 'app/schemas';
import { userAccounts } from 'app/api/user';

const actions = {
  'password': passwordRecovery,
  'username': usernameRecovery
};

export default compose(
  withFormik({
    mapPropsToValues: () => ({
      email: '',
    }),
    validationSchema: schema,
    handleSubmit: (
      { email },
      {
        props: {
          page,
          setUserEmail,
          setSignPage
        }
      }
    ) => {
      userAccounts(email)
        .then(({ amount }) => {
          if (amount === 1) {
            actions[page.name](email)
              .then(() => {
                setSignPage(`forgot-data-step-2-${page.name}`);
              });
          }

          if (amount > 1) {
            setUserEmail(email);

            setSignPage(`forgot-data-clarify-${page.name}`);
          }
        });
    }
  })
);