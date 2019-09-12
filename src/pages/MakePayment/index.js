import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getBillingAccounts } from 'app/api/billing';
import { useApi } from 'app/hooks/api';

import Loader from 'app/components/common/Loader';
import MakePayment from './MakePayment';

const MakePaymentContainer = ({
  match: {
    params: { accountNumber }
  }
}) => {
  const
    api = useCallback(
      () => getBillingAccounts(),
      []
    ),

    [ fetching, data ] = useApi(api),

    user = useSelector(state => state.user.data);

  if (fetching) {
    return <Loader />;
  }

  if (data) {
    return (
      <MakePayment
        accounts={data}
        accountNumber={accountNumber}
        user={user}
      />
    );
  }

  return null;
};

MakePaymentContainer.propTypes = {
  match: PropTypes.object
};

export default MakePaymentContainer;