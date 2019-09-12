import React, { useCallback } from 'react';

import { useApi } from 'app/hooks/api';

import { getPolicyLocations } from 'app/api/policies';
import { getStates } from 'app/api/states';

import Loader from 'app/components/common/Loader';
import Step4 from 'app/components/Forms/NewClaim/Step4';

const WhereHappened = props => {
  const {
    stepsValues: {
      policyNo
    }
  } = props;

  const
    locationsApi = useCallback(
      () => getPolicyLocations(policyNo),
      [ policyNo ]
    ),

    [ fetchingLocations, locations ] = useApi(locationsApi);

  const
    statesApi = useCallback(
      () => getStates(),
      []
    ),

    [ fetchingStates, states ] = useApi(statesApi);

  if (fetchingLocations || fetchingStates) {
    return <Loader />;
  }

  if (locations && states) {
    return (
      <Step4
        locations={locations}
        states={states}
        {...props}
      />
    );
  }

  return null;
};

export default WhereHappened;