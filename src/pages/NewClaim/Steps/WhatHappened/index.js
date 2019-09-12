import React, { useCallback } from 'react';

import { useApi } from 'app/hooks/api';

import { getClaimTypes } from 'app/api/claims';

import Loader from 'app/components/common/Loader';
import Step1 from 'app/components/Forms/NewClaim/Step1';

const WhatHappened = props => {
  const
    api = useCallback(
      () => getClaimTypes(),
      []
    ),

    [ fetching, data ] = useApi(api);

  if (fetching) {
    return <Loader />;
  }

  if (data) {
    if (data.length) {
      return (
        <Step1
          data={data}
          {...props}
        />
      );
    }

    return 'No claim types found';
  }

  return null;
};

export default WhatHappened;