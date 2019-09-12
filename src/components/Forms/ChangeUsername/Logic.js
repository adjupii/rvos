import { compose } from 'recompose';
import { withFormik } from 'formik';

import { updateUser } from 'app/api/user';

import { setToken } from 'app/cookies';

import { signIn as schema } from 'app/schemas';

export default compose(
  withFormik({
    mapPropsToValues: () => ({
      username: '',
      password: ''
    }),
    validationSchema: schema,
    handleSubmit: (
      {
        username,
        password
      },
      {
        setFieldError,
        setSubmitting,
        props: {
          setUserParam,
          callback,
          notify
        }
      }
    ) => {
      updateUser({ username }, password)
        .then(({ token }) => {
          setUserParam({ username });

          setToken(token);

          if (typeof callback === 'function') {
            callback();
          }

          if (typeof notify === 'function') {
            notify();
          }
        })
        .catch(error => {
          const { message } = error;

          if (error.code !== 401) {
            setSubmitting(false);

            if (error.code === 405) {
              setFieldError('password', 'Wrong password');
            }

            if (error.code === 406) {
              setFieldError('username', message);
            }
          }
        });
    }
  })
);