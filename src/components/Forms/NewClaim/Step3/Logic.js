import { compose } from 'recompose';
import { withFormik } from 'formik';

import withStep from 'app/components/Steps/withStep';
import withSlider from 'app/components/Slider/withSlider';

import { newClaimStep3 as schema } from 'app/schemas';

export default compose(
  withFormik({
    mapPropsToValues: ({ policies }) => ({
      policyNo: policies.length === 1 ? policies[0].policyNumber : ''
    }),
    isInitialValid: ({ policies }) => policies.length === 1,
    validationSchema: schema
  }),

  withStep,

  withSlider
);