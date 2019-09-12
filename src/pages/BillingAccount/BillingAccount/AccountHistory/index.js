import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { getBillingAccountHistory } from 'app/api/billing';

import { useApi } from 'app/hooks/api';

import Loader from 'app/components/common/Loader';
import AccountHistory from './AccountHistory';

const AccountHistoryContainer = ({
  accountNumber
}) => {
  const
    api = useCallback(
      () => getBillingAccountHistory(accountNumber),
      [ accountNumber ]
    ),

    [ fetching, data ] = useApi(api);

  return (
    fetching ?
      <Loader />
      : data
        ? data.length
          ? <AccountHistory data={data} />
          : 'No account history found'
        : null
  );
};

AccountHistoryContainer.propTypes = {
  accountNumber: PropTypes.string
};

export default AccountHistoryContainer;