import { useCallback } from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';

import { newClaimStep5 as schema } from 'app/schemas';

import { phone } from 'app/format';

import withStep from 'app/components/Steps/withStep';

export default compose(
  withFormik({
    mapPropsToValues: ({ user: { customer } }) => ({
      sameAsInsured: true,
      contactPersonName: customer.fullName,
      contactPersonPhone: phone(customer.phone),
      contactPersonAltPhone: phone(customer.altPhone)
    }),
    isInitialValid: true,
    validationSchema: schema
  }),

  withStep
);

const useHandleSameAsInsured = (setValues, resetForm) => useCallback(
  e => {
    if (!e.target.checked) {
      setValues({
        sameAsInsured: false,
        contactPersonName: '',
        contactPersonPhone: '',
        contactPersonAltPhone: ''
      });
    } else {
      resetForm();
    }
  },
  [ setValues, resetForm ]
);

export {
  useHandleSameAsInsured
};