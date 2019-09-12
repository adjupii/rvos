import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { useAccountsForSelect } from 'app/hooks/billing';
import { usePastDueNotify } from './Logic';

import {
  currency,
  date
} from 'app/format';

import Styled from './styles';

import FieldBox from '../FieldBox';
import Select from 'app/components/Select';
import FormText from 'app/components/Layouts/FormText';

const Form = ({
  account: {
    nextPaymentAmt,
    remainingBalance,
    nextPaymentDueDate
  },
  setAccountNumber,
  scenario,
  values: {
    accountNumber
  },
  setFieldValue,
  accounts
}) => {
  usePastDueNotify(scenario);

  const accountsForSelect = useAccountsForSelect(accounts);

  const handleAccountNumber = useCallback(
    (value, name) => {
      setFieldValue(name, value);

      setAccountNumber(value);
    },
    [ setFieldValue, setAccountNumber ]
  );

  return (
    <Styled
      autoComplete="off"
      className="c-make-payment-step-1"
    >
      <FieldBox
        className="make-payment-field-box--no-indent make-payment-field-box--size-big"
      >
        <Select
          place="in-form"
          inputProps={{
            name: 'accountNumber',
            label: 'Account number'
          }}
          selected={accountNumber}
          onChange={handleAccountNumber}
          items={accountsForSelect}
        />
      </FieldBox>

      <div className="c-make-payment-step-1__text-holder">
        {
          scenario === 'scenario-1' && (
            <FormText>
              You have no balance due on your account.
            </FormText>
          )
        }

        {
          scenario === 'scenario-2' && (
            <FormText>
              You do not currently have a payment due.<br />
              The total remaining balance on the account is {currency(remainingBalance)}
            </FormText>
          )
        }

        {
          scenario === 'scenario-3' && (
            <FormText>
              Your payment of {currency(nextPaymentAmt)} is due on {date(nextPaymentDueDate)}<br />
              The total remaining balance on the account is {currency(remainingBalance)}.
            </FormText>
          )
        }

        {
          scenario === 'scenario-4' && (
            <FormText>
              Your payment of {currency(nextPaymentAmt)} was due on {date(nextPaymentDueDate)}<br />
              The total remaining balance on the account is {currency(remainingBalance)}.
            </FormText>
          )
        }
      </div>
    </Styled>
  );
};

Form.propTypes = {
  account: PropTypes.object,
  setAccountNumber: PropTypes.func,
  scenario: PropTypes.string,
  values: PropTypes.object,
  setFieldValue: PropTypes.func,
  accounts: PropTypes.arrayOf(PropTypes.object)
};

export default Form;