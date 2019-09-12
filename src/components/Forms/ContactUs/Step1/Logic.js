import {
  compose
} from 'recompose';
import { withFormik } from 'formik';

import withStep from 'app/components/Steps/withStep';

import { newRequestStep1 as schema } from 'app/schemas';

export default compose(
  withFormik({
    mapPropsToValues: () => ({
      topic: ''
    }),
    validationSchema: schema
  }),

  withStep
);