import { compose } from 'redux';
import { withFormik } from 'formik';

import withStep from 'app/components/Steps/withStep';

import { makePaymentStep2 as schema } from 'app/schemas';

export default compose(
  withFormik({
    mapPropsToValues: () => ({
      amount: '',
      amountId: ''
    }),
    validationSchema: schema
  }),

  withStep
);