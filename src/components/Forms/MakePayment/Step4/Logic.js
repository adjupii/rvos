import { compose } from 'redux';
import { withFormik } from 'formik';

import withStep from 'app/components/Steps/withStep';

import { makePaymentStep4 as schema } from 'app/schemas';

const VALUES = {
  bankAccountName: '',
  bankAccountRoutingNumber: '',
  bankAccountNumber: '',
  bankAccountType: '',
  creditCardNumber: '',
  creditExpirationDate: [ '', '' ],
  creditCardCVV: '',
  billingFirstName: '',
  billingLastName: '',
  street: '',
  city: '',
  state: '',
  postalCode: ''
};

export default compose(
  withFormik({
    mapPropsToValues: () => ({
      type: 'creditCard',
      ...VALUES
    }),
    validationSchema: schema
  }),

  withStep
);

const onType = (setValues, value) => {
  setValues({
    type: value,
    ...VALUES
  });
};

export {
  onType
};