import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { getClaimPayments } from 'app/api/claims';

import { useApi } from 'app/hooks/api';

import Loader from 'app/components/common/Loader';
import Payment from './Payment';

const PaymentContainer = ({
  id
}) => {
  const
    api = useCallback(
      () => getClaimPayments(id),
      [ id ]
    ),

    [ fetching, data ] = useApi(api);

  return (
    fetching ?
      <Loader />
      : data
        ? data.length
          ? <Payment data={data} />
          : 'A payment has not been issued'
        : null
  );
};

PaymentContainer.propTypes = {
  id: PropTypes.string
};

export default PaymentContainer;