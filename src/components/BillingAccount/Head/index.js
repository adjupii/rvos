import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useAccountActions } from 'app/hooks/billing';

import Styled from './styles';

import Payment from 'app/components/Icons/Payment';
import PaymentFull from 'app/components/Icons/PaymentFull';
import Attention from 'app/components/Icons/Attention';
import DropdownMenu from 'app/components/common/DropdownMenu';

const AccountHead = ({
  accountNumber,
  billingType,
  withActions = true,
  warningMessage,
  children,
  className
}) => {
  const actions = useAccountActions(accountNumber, withActions);

  const handleStopBubbling = useCallback(
    e => {
      e.stopPropagation();
    },
    []
  );

  return (
    <Styled
      className={
        classNames(
          'c-account-head',
          className,
          { 'with-warning': warningMessage }
        )
      }
    >
      {
        billingType
          ? (
            <PaymentFull
              width="48"
              height="48"
              className="c-account-head__icon"
            />
          )
          : (
            <Payment
              width="48"
              height="48"
              className="c-account-head__icon"
            />
          )
      }

      {
        children || (
          <div className="c-account-head__account-number">
            {accountNumber}
          </div>
        )
      }

      {
        warningMessage && (
          <div className="c-account-head__warning">
            <Attention
              width="24"
              height="24"
              className="c-account-head__warning-icon"
            />

            <div className="c-account-head__warning-message">
              {warningMessage}
            </div>
          </div>
        )
      }

      {
        !!actions.length && (
          <DropdownMenu
            onClick={handleStopBubbling}
            items={actions}
            className="c-account-head__actions"
          />
        )
      }
    </Styled>
  );
};

AccountHead.propTypes = {
  accountNumber: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  billingType: PropTypes.string,
  withActions: PropTypes.bool,
  warningMessage: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

export default AccountHead;