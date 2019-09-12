import { compose } from 'redux';
import { withFormik } from 'formik';

import withStep from 'app/components/Steps/withStep';

import { makePaymentStep3 as schema } from 'app/schemas';

export default compose(
  withFormik({
    mapPropsToValues: () => ({
      sendReceipt: false,
      receiptEmailId: 'noNeeded',
      receiptEmail: ''
    }),
    validationSchema: schema,
    isInitialValid: true
  }),

  withStep
);

const onReceiptEmailId = (value, email, setFieldTouched, setValues) => {
  let receiptEmail = '';

  if (value === 'email') {
    receiptEmail = email;
  }

  const sendReceipt = value === 'noNeeded' ? false : true;

  setFieldTouched('receiptEmail', false);

  setValues({
    sendReceipt,
    receiptEmailId: value,
    receiptEmail
  });
};

export {
  onReceiptEmailId
};