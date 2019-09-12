import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { getBillingAccount } from 'app/api/billing';

import { useApi } from 'app/hooks/api';

import Loader from 'app/components/common/Loader';
import BillingSummary from './BillingSummary';

const BillingSummaryContainer = ({
  accountNumber,
  billingType
}) => {
  const
    api = useCallback(
      () => getBillingAccount(accountNumber),
      [ accountNumber ]
    ),

    [ fetching, data ] = useApi(api);

  return (
    fetching ?
      <Loader />
      : data
        ? (
          <BillingSummary
            billingType={billingType}
            data={data}
          />
        )
        : null
  );
};

BillingSummaryContainer.propTypes = {
  accountNumber: PropTypes.string,
  billingType: PropTypes.string
};

export default BillingSummaryContainer;