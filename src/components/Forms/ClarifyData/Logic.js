import { compose } from 'recompose';
import { withFormik } from 'formik';

import { emailSend as passwordRecovery } from 'app/api/restore-password';
import { emailSend as usernameRecovery } from 'app/api/restore-username';
import { clarifyData as schema } from 'app/schemas';

const actions = {
  'forgot-data-clarify-password': passwordRecovery,
  'forgot-data-clarify-username': usernameRecovery
};

export default compose(
  withFormik({
    mapPropsToValues: () => ({
      policyNo: '',
    }),
    validationSchema: schema,
    handleSubmit: (
      { policyNo },
      {
        setFieldError,
        setSubmitting,
        props: {
          page,
          userEmail,
          setSignPage
        }
      }
    ) => {
      actions[page](userEmail, policyNo)
        .then(() => {
          setSignPage(`forgot-data-step-2-${page.name}`);
        })
        .catch(error => {
          setSubmitting(false);

          if (error.code === 406) {
            setFieldError('policyNo', 'Policy number not found');
          }
        });
    }
  })
);