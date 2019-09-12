import {
  compose,
  withHandlers
} from 'recompose';
import { withFormik } from 'formik';

import { phone } from 'app/format';

import withStep from 'app/components/Steps/withStep';

import { newRequestStep3 as schema } from 'app/schemas';

export default compose(
  withFormik({
    mapPropsToValues: () => ({
      respondBy: '',
      respondByValue: ''
    }),
    validationSchema: schema
  }),

  withHandlers({
    handleRespondByType: ({
      setValues,
      user: { customer }
    }) => ({
      target: { value }
    }) => {
      setValues({
        respondBy: value,
        respondByValue: value === 'email' ? customer.email : phone(customer.phone)
      });
    }
  }),

  withStep
);