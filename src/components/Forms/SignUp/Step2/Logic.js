import { compose } from 'recompose';
import { withFormik } from 'formik';

import { registration } from 'app/api/sign-up';
import { signUpStep2 as schema } from 'app/schemas';
import { numbers } from 'app/format';

export default compose(
  withFormik({
    mapPropsToValues: ({ userData }) => ({
      email: userData.email || '',
      username: '',
      plainPassword: '',
      passwordConfirm: ''
    }),
    validationSchema: schema,
    handleSubmit: (
      {
        email,
        username,
        plainPassword
      },
      {
        setSubmitting,
        setFieldError,
        props: {
          userData: {
            policyNo,
            fullName,
            taxNo,
            phone
          },
          setSignPage,
          setUserData
        }
      }
    ) => {
      const data = {
        email,
        username,
        plainPassword,
        fullName,
        taxNo,
        phone: numbers(phone)
      };

      registration(policyNo, data)
        .then(() => {
          setUserData({ email });

          setSignPage('sign-up-step-3');
        })
        .catch((error) => {
          setSubmitting(false);

          if (error.code === 406) {
            setFieldError('username', 'This username is already taken');
          }

          if (error.code === 409) {
            setFieldError('apiError', 'This customer already exists');
          }

          if (error.code === 420) {
            setFieldError('apiError', 'Please contact RVOS Customer Service for assistance with registration.');
          }
        });
    }
  })
);