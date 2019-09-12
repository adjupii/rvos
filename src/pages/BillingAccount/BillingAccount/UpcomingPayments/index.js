import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { getBillingAccountUpcomingPayments } from 'app/api/billing';

import { useApi } from 'app/hooks/api';

import Loader from 'app/components/common/Loader';
import UpcomingPayments from './UpcomingPayments';

const UpcomingPaymentsContainer = ({
  accountNumber
}) => {
  const
    api = useCallback(
      () => getBillingAccountUpcomingPayments(accountNumber),
      [ accountNumber ]
    ),

    [ fetching, data ] = useApi(api);

  return (
    fetching ?
      <Loader />
      : data
        ? data.length
          ? <UpcomingPayments data={data} />
          : 'No upcoming payments found'
        : null
  );
};

UpcomingPaymentsContainer.propTypes = {
  accountNumber: PropTypes.string
};

export default UpcomingPaymentsContainer;