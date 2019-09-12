import React, { useCallback } from 'react';

import { useApi } from 'app/hooks/api';

import { getPolicies } from 'app/api/policies';

import { date } from 'app/format';
import { getClaimTypeLobs } from 'app/helpers/claim';

import Loader from 'app/components/common/Loader';
import Step3 from 'app/components/Forms/NewClaim/Step3';

const Policy = props => {
  const {
    stepsValues: {
      claimLobs,
      lossDate
    }
  } = props;

  const
    api = useCallback(
      () => (
        getPolicies({
          filter: {
            ...getClaimTypeLobs(claimLobs),
            asOfDate: date(lossDate, 'MM-DD-YYYY'),
            asOfDateInRange: '1'
          }
        })
      ),
      [ claimLobs, lossDate ]
    ),

    [ fetching, data ] = useApi(api);

  if (fetching) {
    return <Loader />;
  }

  if (data) {
    return (
      <Step3
        policies={data}
        {...props}
      />
    );
  }

  return null;
};

export default Policy;