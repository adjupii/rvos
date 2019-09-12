import { compose } from 'recompose';
import { withFormik } from 'formik';

import { findCustomer } from 'app/api/sign-up';
import { signUpStep1 as schema } from 'app/schemas';
import { numbers } from 'app/format';

export default compose(
  withFormik({
    mapPropsToValues: ({ userData }) => ({
      policyNo: userData.policyNo || '',
      fullName: userData.fullName || '',
      checkId: userData.checkId || 'phone',
      taxNo: userData.taxNo || '',
      phone: userData.phone || ''
    }),
    validationSchema: schema,
    isInitialValid: ({ userData }) => !!Object.keys(userData).length,
    handleSubmit: (
      {
        policyNo,
        fullName,
        checkId,
        taxNo,
        phone
      },
      {
        setSubmitting,
        setFieldError,
        props: {
          setSignPage,
          setUserData
        }
      }
    ) => {
      findCustomer(
        policyNo,
        {
          fullName,
          taxNo: taxNo ? taxNo : null,
          phone: phone ? numbers(phone) : null
        }
      )
        .then(({ email }) => {
          const userEmail = { email };

          setUserData({
            ...userEmail,
            policyNo,
            fullName,
            checkId,
            taxNo,
            phone
          });

          setSignPage('sign-up-step-2');
        })
        .catch(error => {
          setSubmitting(false);

          if (error.code === 400) {
            setFieldError('apiError', 'Account not found');
          }
        });
    }
  })
);

