import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { useApi } from 'app/hooks/api';

import { getBillingAccount } from 'app/api/billing';
import { getQuickLinks } from 'app/api/quick-links';

import Breadcrumbs from 'app/components/Breadcrumbs';
import Loader from 'app/components/common/Loader';
import BillingAccount from './BillingAccount';

const BillingAccountContainer = ({
  match: {
    params: { accountNumber }
  }
}) => {
  const
    api = useCallback(
      () => (
        Promise.all([
          getBillingAccount(accountNumber),
          getQuickLinks('billing')
        ])
      ),
      [ accountNumber ]
    ),

    [ fetching, data ] = useApi(api);

  return (
    <>
      <Breadcrumbs
        page="billingCenter"
        title="BILLING AND PAYMENT"
      />

      {
        fetching
          ? <Loader />
          : (
            data
              ? (
                <BillingAccount
                  accountNumber={accountNumber}
                  billing={data[0]}
                  quickLinks={data[1]}
                />
              )
              : null
          )
      }
    </>
  );
};

BillingAccountContainer.propTypes = {
  match: PropTypes.object
};

export default BillingAccountContainer;