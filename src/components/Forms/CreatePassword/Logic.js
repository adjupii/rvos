import { compose } from 'recompose';
import { withFormik } from 'formik';

import { createPassword as schema } from 'app/schemas';
import { setNewPassword } from 'app/api/restore-password';

export default compose(
  withFormik({
    mapPropsToValues: () => ({
      password: '',
      passwordConfirm: ''
    }),
    validationSchema: schema,
    handleSubmit: (
      {
        password
      },
      {
        props: {
          token,
          setPage
        }
      }
    ) => {
      setNewPassword({
        token,
        password
      })
        .then(() => {
          setPage('message');
        });
    }
  })
);