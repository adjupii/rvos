import { useCallback } from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';

import withStep from 'app/components/Steps/withStep';

import { newClaimStep1 as schema } from 'app/schemas';

export default compose(
  withFormik({
    mapPropsToValues: () => ({
      claimType: '',
      claimSubType: ''
    }),
    validationSchema: schema
  }),

  withStep
);

const useHandleClaimType = (types, setValues) => useCallback(
  e => {
    const { value } = e.target;

    const {
      subtypes,
      lobs
    } = types[value];

    setValues({
      claimType: value,
      claimLobs: lobs,
      claimSubType: subtypes.length ? subtypes[0].id : ''
    });
  },
  [ types, setValues ]
);

export {
  useHandleClaimType
};