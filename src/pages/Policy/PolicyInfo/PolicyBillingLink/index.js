import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

import Account from 'app/components/Icons/Account';

const PolicyBillingLink = ({
  billingAccount
}) => (
  <Styled
    to={`/app/billing/${billingAccount}`}
    className="policy-billing-link"
  >
    <Account
      width="16"
      height="16"
    />

    <span>
      {billingAccount}
    </span>
  </Styled>
);

PolicyBillingLink.propTypes = {
  billingAccount: PropTypes.string
};

export default PolicyBillingLink;