import { compose } from 'recompose';
import { withFormik } from 'formik';

import { changeEmail } from 'app/api/user';

import { userEmail as schema } from 'app/schemas';

export default compose(
  withFormik({
    mapPropsToValues: () => ({
      email: '',
      password: ''
    }),
    validationSchema: schema,
    handleSubmit: (
      {
        email,
        password
      },
      {
        setFieldError,
        setSubmitting,
        props: {
          callback,
          notify
        }
      }
    ) => {
      changeEmail(email, password)
        .then(() => {
          if (typeof callback === 'function') {
            callback();
          }

          if (typeof notify === 'function') {
            notify();
          }
        })
        .catch(error => {
          if (error.code !== 401) {
            setSubmitting(false);

            if (error.code === 405) {
              setFieldError('password', 'Wrong password');
            }
          }
        });
    }
  })
);