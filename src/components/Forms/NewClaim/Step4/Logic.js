import { compose } from 'redux';
import { withFormik } from 'formik';

import withStep from 'app/components/Steps/withStep';

import { newClaimStep4 as schema } from 'app/schemas';

export default compose(
  withFormik({
    mapPropsToValues: () => ({
      lossLocationPropertyCode: '',
      lossLocationAddress: '',
      lossLocationCity: '',
      lossLocationState: '',
      lossLocationZip: ''
    }),
    validationSchema: schema
  }),

  withStep
);

const onLocation = (setValues, value) => {
  setValues({
    lossLocationPropertyCode: value,
    lossLocationAddress: '',
    lossLocationCity: '',
    lossLocationState: '',
    lossLocationZip: ''
  });
};

export {
  onLocation
};