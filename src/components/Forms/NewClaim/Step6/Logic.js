import { compose } from 'recompose';
import { withFormik } from 'formik';

import { newClaimStep6 as schema } from 'app/schemas';

import withStep from 'app/components/Steps/withStep';

export default compose(
  withFormik({
    mapPropsToValues: () => ({
      lossDescription: ''
    }),
    validationSchema: schema
  }),

  withStep
);