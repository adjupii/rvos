import { compose } from 'recompose';
import { withFormik } from 'formik';

import { updateUser } from 'app/api/user';

import { changePassword as schema } from 'app/schemas';

export default compose(
  withFormik({
    mapPropsToValues: () => ({
      password: '',
      plainPassword: '',
      passwordConfirm: ''
    }),
    validationSchema: schema,
    handleSubmit: (
      {
        password,
        plainPassword
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
      updateUser({ plainPassword }, password)
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