import {
  compose,
  withHandlers
} from 'recompose';
import { withFormik } from 'formik';

import { phone } from 'app/format';

import withStep from 'app/components/Steps/withStep';

import { updatePolicyStep2 as schema } from 'app/schemas';

export default compose(
  withFormik({
    mapPropsToValues: () => ({
      respondBy: '',
      respondByValue: '',
      disclaimer: false
    }),
    validationSchema: schema
  }),

  withHandlers({
    handleRespondByType: ({
      setValues,
      values: { disclaimer },
      user: { customer }
    }) => ({
      target: { value }
    }) => {
      setValues({
        disclaimer,
        respondBy: value,
        respondByValue: value === 'email' ? customer.email : phone(customer.phone)
      });
    }
  }),

  withStep
);