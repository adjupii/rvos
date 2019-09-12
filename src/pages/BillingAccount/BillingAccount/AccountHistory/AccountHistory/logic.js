import { useMemo } from 'react';
import { compose } from 'redux';
import groupBy from 'lodash/groupBy';

const useFitersData = data => (
  useMemo(
    () => ({
      policyNumber: compose(
        data => groupBy(data, 'policyNumber'),
        data => data.filter(item => item.policyNumber)
      )(data)
    }),
    [ data ]
  )
);

export {
  useFitersData
};