import React from 'react';
import PropTypes from 'prop-types';

import {
  useAccountCardBillet,
  useAccountType
} from 'app/hooks/billing';
import useGoToPage from 'app/hooks/useGoToPage';

import Styled from './styles';

import AccountHead from './Head';
import AccountContent from './Content';
import ArrowRight from 'app/components/Icons/ArrowRight';

const Account = ({
  data,
  location,
  withActions
}) => {
  const billingType = useAccountType(
    data.billToType,
    data.remainingBalance
  );

  const handleAccount = useGoToPage(`/app/billing/${data.accountNumber}`);

  const {
    color,
    position
  } = useAccountCardBillet(location);

  return (
    <>
      <Styled
        billet={color}
        billetPosition={position}
        onClick={handleAccount}
        className={`c-account in-${location}`}
      >
        <div className="c-account__inner">
          <div className="c-account__inner-data">
            <AccountHead
              accountNumber={data.accountNumber}
              billingType={billingType}
              warningMessage={data.warningMessage}
              withActions={withActions}
              className={`in-${location}`}
            />

            <AccountContent
              data={data}
              billingType={billingType}
              className={`in-${location}`}
            />
          </div>

          <div className="c-account__arrow">
            <ArrowRight
              width="24"
              height="24"
            />
          </div>
        </div>
      </Styled>
    </>
  );
};

Account.propTypes = {
  data: PropTypes.object,
  location: PropTypes.oneOf([
    'dashboard',
    'dashboard-half',
    'billing-center'
  ]),
  withActions: PropTypes.bool
};

export default Account;