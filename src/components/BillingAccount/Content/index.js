import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useDialog from 'app/hooks/useDialog';
import {
  useItemsForAccountChart,
  usePaymentAmountDueLabel,
  BILLING_TYPES
} from 'app/hooks/billing';

import {
  currency,
  date
} from 'app/format';

import Styled from './styles';

import DonutChart from 'app/components/DonutChart';
import Info from 'app/components/EntityDetails/Info';
import QuestionInCircle2 from 'app/components/Icons/QuestionInCircle2';
import { Link } from 'app/components/common/Button';

const AccountContent = ({
  data,
  billingType,
  className
}) => {
  const { openDialog } = useDialog();

  const chartItems = useItemsForAccountChart(data);

  const paymentAmountDueLabel = usePaymentAmountDueLabel(data.paymentMethod);

  const handleOpenDialog = useCallback(
    e => {
      e.stopPropagation();

      openDialog(
        'account-amount-details',
        {
          title: 'Amount Details'
        }
      );
    },
    [ openDialog ]
  );

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
          'c-account-content',
          className
        )
      }
    >
      <div className="c-account-content__left">
        <div className="c-account-content__balance-chart">
          <DonutChart
            total={data.total}
            items={chartItems}
            className="account-balance in-dashboard"
          />

          <Info
            label="Remaining Balance"
            value={currency(data.remainingBalance)}
            valueColor={billingType && 'green-1'}
            className="c-account-content__remaining-balance-in-chart"
          />
        </div>

        <div className="c-account-content__balance-info">
          {
            !billingType && (
              <Info
                label="Remaining Balance"
                value={currency(data.remainingBalance)}
                className="c-account-content__remaining-balance"
              />
            )
          }

          <Info
            label={paymentAmountDueLabel}
            className="c-account-content__amount-due-label"
          />

          <div className="c-account-content__amount-due-holder">
            <div className="c-account-content__amount-due">
              {billingType || currency(data.nextPaymentAmt)}
            </div>

            {
              !billingType && (
                <QuestionInCircle2
                  width="24"
                  height="24"
                  onClick={handleOpenDialog}
                  className="c-account-content__circle-icon"
                />
              )
            }
          </div>

          {
            !billingType && (
              <div className="c-account-content__amount-date">
                {date(data.nextPaymentDueDate)}
              </div>
            )
          }

          {
            billingType !== BILLING_TYPES.BILLED_TO_MORTGAGEE && (
              <div className="c-account-content__make-payment">
                <Link
                  to={`/app/billing/account/payment/${data.accountNumber}`}
                  onClick={handleStopBubbling}
                >
                  MAKE A PAYMENT
                </Link>
              </div>
            )
          }
        </div>
      </div>

      <div className="c-account-content__right">
        <div className="c-account-content__right-inner">
          <Info
            label="Last Payment"
            value={currency(data.lastPaymentAmt)}
          />

          <Info
            label="Last Payment Received"
            value={date(data.lastPaymentPostDate)}
          />
        </div>

        <div className="c-account-content__right-inner add-info">
          <Info
            label="Payment Method"
            value={data.paymentMethod}
          />

          {
            data.pastDue && (
              <Info
                label="Past Due Amount"
                value={currency(data.pastDuePayment)}
                valueColor="red-1"
              />
            )
          }
        </div>
      </div>
    </Styled>
  );
};

AccountContent.propTypes = {
  data: PropTypes.object,
  billingType: PropTypes.string,
  className: PropTypes.string
};

export default AccountContent;