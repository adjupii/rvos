import {
  compose
} from 'recompose';
import { withFormik } from 'formik';

import withStep from 'app/components/Steps/withStep';

import { newRequestStep2 as schema } from 'app/schemas';

export default compose(
  withFormik({
    mapPropsToValues: () => ({
      text: ''
    }),
    validationSchema: schema
  }),

  withStep
);