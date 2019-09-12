import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import usePrevious from 'app/hooks/usePrevious';

import { MASKS } from 'app/schemas';
import { currency } from 'app/format';

import Styled from './styles';

import FieldBox from '../FieldBox';
import Field from 'app/components/common/Form/Field';
import Check from 'app/components/common/Form/Check';

const Form = ({
  scenario,
  values: {
    amount,
    amountId
  },
  account,
  setFieldValue,
  setValues,
  resetForm
}) => {
  const
    { accountNumber } = account,

    prevAccountNumber = usePrevious(accountNumber);

  useEffect(
    () => {
      if (accountNumber !== prevAccountNumber) {
        resetForm();
      }
    },
    [
      accountNumber,
      prevAccountNumber,
      resetForm
    ]
  );

  const handleAmountId = useCallback(
    ({ target: { value } }) => {
      const amount = account[value] || '';

      setValues({
        amount,
        amountId: value
      });
    },
    [ account, setValues ]
  );

  return (
    <Styled
      autoComplete="off"
      className="make-payment-step-2"
    >
      {
        scenario
        && (
          scenario === 'scenario-3'
          || scenario === 'scenario-4'
        )
        && (
          <div className="make-payment-step-2__check-holder">
            <Check
              type="radio"
              name="amountId"
              id="nextPaymentAmt"
              label={`Total amount due now: ${currency(account.nextPaymentAmt)}`}
              value="nextPaymentAmt"
              checked={amountId === 'nextPaymentAmt'}
              onChange={handleAmountId}
            />
          </div>
        )
      }

      {
        scenario
        && scenario !== 'scenario-1'
        && (
          <>
            <div className="make-payment-step-2__check-holder">
              <Check
                type="radio"
                name="amountId"
                id="remainingBalance"
                label={`Total remaining balance on account: ${currency(account.remainingBalance)}`}
                value="remainingBalance"
                checked={amountId === 'remainingBalance'}
                onChange={handleAmountId}
              />
            </div>

            <Check
              type="radio"
              name="amountId"
              id="anotherAmount"
              label="Another amount"
              value="anotherAmount"
              checked={amountId === 'anotherAmount'}
              onChange={handleAmountId}
            />
          </>
        )
      }

      {
        scenario
        && scenario !== 'scenario-1'
        && amountId === 'anotherAmount'
        && (
          <FieldBox className="make-payment-field-box--size-big">
            <Field
              name="amount"
              label="Amount"
              mask={MASKS.currency}
              value={amount}
              onChange={setFieldValue}
            />
          </FieldBox>
        )
      }
    </Styled>
  );
};

Form.propTypes = {
  scenario: PropTypes.string,
  setFieldValue: PropTypes.func,
  values: PropTypes.object,
  account: PropTypes.object,
  setValues: PropTypes.func,
  resetForm: PropTypes.func
};

export default Form;