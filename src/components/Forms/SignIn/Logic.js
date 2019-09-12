import { compose } from 'recompose';
import { withFormik } from 'formik';

import { signIn as schema } from 'app/schemas';
import { setToken } from 'app/cookies';
import { loginCheck } from 'app/api/sign-in';
import { notifications } from 'app/components/common/Notifications';

export default compose(
  withFormik({
    mapPropsToValues: ({ username }) => ({
      username: username || '',
      password: ''
    }),
    validationSchema: schema,
    handleSubmit: (
      values,
      {
        setSubmitting,
        setFieldError,
        props: {
          setSignPage,
          setUserEmail,
          history
        }
      }
    ) => {
      loginCheck({ ...values, username: values.username.trim() })
        .then(({ token }) => {
          setToken(token);
          history.push('/app/dashboard');
        })
        .catch(error => {
          if (error.code === 405) {
            setSubmitting(false);

            setFieldError('apiError', 'Invalid username or password');
          }

          if (error.code === 406) {
            setUserEmail(error.email);

            setSignPage('sign-in-confirm-account');
          }

          if (error.code === 470) {
            notifications.create({
              message: 'Exceeded the number of attempts. Please retry in an hour.',
              type: 'error'
            })();
          }
        });
    }
  })
);