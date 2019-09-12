import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

import Account from 'app/components/Icons/Account';

const Head = ({
  accountName = 'Payment Account',
  accountNumber = 'N/A'
}) => (
  <Styled className="c-make-payment-head">
    <Account
      width="24"
      height="24"
      className="c-make-payment-head__icon"
    />

    <div>
      <div className="c-make-payment-head__acc-name">
        {accountName}
      </div>

      <div className="c-make-payment-head__acc-number">
        {accountNumber}
      </div>
    </div>
  </Styled>
);

Head.propTypes = {
  accountName: PropTypes.string,
  accountNumber: PropTypes.number
};

export default Head;