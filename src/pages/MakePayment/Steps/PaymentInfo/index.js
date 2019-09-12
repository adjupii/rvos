import React, { useCallback } from 'react';

import { getBankAccTypes } from 'app/api/billing';
import { getStates } from 'app/api/states';

import { useApi } from 'app/hooks/api';

import Loader from 'app/components/common/Loader';
import Step4 from 'app/components/Forms/MakePayment/Step4';

const PaymentInfo = props => {
  const
    api = useCallback(
      () => (
        Promise.all([
          getBankAccTypes(),
          getStates()
        ])
      ),
      []
    ),

    [ fetching, data ] = useApi(api);

  if (fetching) {
    return <Loader />;
  }

  if (data) {
    const [
      bankAccTypes,
      states
    ] = data;

    return (
      <Step4
        bankAccTypes={bankAccTypes}
        states={states}
        {...props}
      />
    );
  }

  return null;
};

export default PaymentInfo;