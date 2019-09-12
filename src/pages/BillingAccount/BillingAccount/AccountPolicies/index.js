import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { getBillingAccountPolicies } from 'app/api/billing';

import { useApi } from 'app/hooks/api';

import Loader from 'app/components/common/Loader';
import AccountPolicies from './AccountPolicies';

const AccountPoliciesContainer = ({
  accountNumber
}) => {
  const
    api = useCallback(
      () => getBillingAccountPolicies(accountNumber),
      [ accountNumber ]
    ),

    [ fetching, data ] = useApi(api);

  return (
    fetching ?
      <Loader />
      : data
        ? data.length
          ? <AccountPolicies data={data} />
          : 'No account policies found'
        : null
  );
};

AccountPoliciesContainer.propTypes = {
  accountNumber: PropTypes.string
};

export default AccountPoliciesContainer;