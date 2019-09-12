import { compose } from 'recompose';
import { withFormik } from 'formik';
import addDays from 'date-fns/add_days';

import withStep from 'app/components/Steps/withStep';

import { updatePolicyStep1 as schema } from 'app/schemas';

export default compose(
  withFormik({
    mapPropsToValues: () => ({
      text: '',
      requestedEffectiveDate: addDays(new Date(), 1)
    }),
    validationSchema: schema
  }),

  withStep
);