import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

import { useStatesForSelect } from 'app/hooks/states';
import { useBankAccTypesForSelect } from 'app/hooks/bankAccTypes';

import { onType } from './Logic';

import { CREDIT_CARD_MONTHS } from 'app/helpers/credit-card/constants';
import { getCreditCardYears } from 'app/helpers/credit-card';

import { MASKS } from 'app/schemas';

import Styled from './styles';

import Check from 'app/components/common/Form/Check';
import EFTCard from 'app/components/Icons/EFTCard';
import CreditCard from 'app/components/Icons/CreditCard';
import FormText from 'app/components/Layouts/FormText';
import FieldBox from '../FieldBox';
import Field from 'app/components/common/Form/Field';
import Select from 'app/components/Select';
import AcceptedCards from './AcceptedCards';

const Form = ({
  values,
  handleChange,
  setFieldValue,
  setValues,
  bankAccTypes,
  states,
  yearsAfterCurrent = 20
}) => {
  const
    creditCardYears = useMemo(
      () => getCreditCardYears(yearsAfterCurrent),
      [ yearsAfterCurrent ]
    ),

    statesForSelect = useStatesForSelect(states),

    bankAccTypesForSelect = useBankAccTypesForSelect(bankAccTypes),

    handleSelect = useCallback(
      (value, name) => {
        setFieldValue(name, value);
      },
      [ setFieldValue ]
    ),

    handleType = useCallback(
      ({ target: { value } }) => {
        onType(setValues, value);
      },
      [ setValues ]
    );

  return (
    <Styled
      autoComplete="off"
      className="make-payment-step-4"
    >
      <div className="make-payment-step-4__check-holder">
        <Check
          type="radio"
          name="type"
          id="creditCard"
          label="Credit card"
          value="creditCard"
          checked={values.type === 'creditCard'}
          onChange={handleType}
        />
      </div>

      <Check
        type="radio"
        name="type"
        id="eft"
        label="Electronic Funds Transfer (bank draft)"
        value="eft"
        checked={values.type === 'eft'}
        onChange={handleType}
      />

      {
        values.type === 'eft' && (
          <>
            <div className="make-payment-step-4__icon-holder">
              <EFTCard
                width="320"
                height="146"
              />
            </div>

            <div className="make-payment-step-4__text-holder">
              <FormText>
                Electronic Funds Transfer (EFT) will debit your bank account electronically without the need for a paper check. The routing and account number can be found on your paper checks.
              </FormText>
            </div>

            <FieldBox>
              <Field
                label="Name on Bank Account"
                name="bankAccountName"
                value={values.bankAccountName}
                onChange={handleChange}
              />
            </FieldBox>

            <div className="make-payment-step-4__field-box-holder">
              <FieldBox>
                <Field
                  label="Routing Number (blue section)"
                  name="bankAccountRoutingNumber"
                  value={values.bankAccountRoutingNumber}
                  onChange={handleChange}
                />
              </FieldBox>

              <FieldBox>
                <Field
                  label="Account Code (green section)"
                  name="bankAccountNumber"
                  value={values.bankAccountNumber}
                  onChange={handleChange}
                />
              </FieldBox>

              <FieldBox>
                <Select
                  place="in-form"
                  inputProps={{
                    name: 'bankAccountType',
                    label: 'Account type'
                  }}
                  selected={values.bankAccountType}
                  onChange={handleSelect}
                  items={bankAccTypesForSelect}
                />
              </FieldBox>
            </div>
          </>
        )
      }

      {
        values.type === 'creditCard' && (
          <>
            <div className="make-payment-step-4__icon-holder">
              <CreditCard
                width="330"
                height="98"
              />
            </div>

            <AcceptedCards />

            <FieldBox>
              <Field
                label="Card number"
                name="creditCardNumber"
                mask={MASKS.creditCard}
                value={values.creditCardNumber}
                onChange={setFieldValue}
              />
            </FieldBox>

            <div className="make-payment-step-4__field-box-holder">
              <FieldBox className="make-payment-field-box--size-small">
                <Select
                  place="in-form"
                  inputProps={{
                    name: 'creditExpirationDate[0]',
                    label: 'Month'
                  }}
                  selected={values.creditExpirationDate[0]}
                  onChange={handleSelect}
                  items={CREDIT_CARD_MONTHS}
                />
              </FieldBox>

              <FieldBox className="make-payment-field-box--size-small">
                <Select
                  place="in-form"
                  inputProps={{
                    name: 'creditExpirationDate[1]',
                    label: 'Year'
                  }}
                  selected={values.creditExpirationDate[1]}
                  onChange={handleSelect}
                  items={creditCardYears}
                />
              </FieldBox>

              <FieldBox className="make-payment-field-box--size-small">
                <Field
                  label="CVV number"
                  name="creditCardCVV"
                  mask={MASKS.securityCode}
                  value={values.creditCardCVV}
                  onChange={setFieldValue}
                />
              </FieldBox>
            </div>

            <div className="make-payment-step-4__text-holder">
              <FormText>
                Payer info:
              </FormText>
            </div>

            <div className="make-payment-step-4__field-box-holder">
              <FieldBox>
                <Field
                  label="First Name"
                  name="billingFirstName"
                  value={values.billingFirstName}
                  onChange={handleChange}
                />
              </FieldBox>

              <FieldBox>
                <Field
                  label="Last Name"
                  name="billingLastName"
                  value={values.billingLastName}
                  onChange={handleChange}
                />
              </FieldBox>
            </div>

            <FieldBox>
              <Field
                label="Address"
                name="street"
                value={values.street}
                onChange={handleChange}
              />
            </FieldBox>

            <div className="make-payment-step-4__field-box-holder">
              <FieldBox className="make-payment-field-box--size-medium">
                <Field
                  label="City"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                />
              </FieldBox>

              <FieldBox className="make-payment-field-box--size-medium">
                <Select
                  place="in-form"
                  inputProps={{
                    name: 'state',
                    label: 'State'
                  }}
                  selected={values.state}
                  onChange={handleSelect}
                  items={statesForSelect}
                />
              </FieldBox>

              <FieldBox className="make-payment-field-box--size-small">
                <Field
                  label="Zip code"
                  name="postalCode"
                  mask={MASKS.zipCode}
                  value={values.postalCode}
                  onChange={setFieldValue}
                />
              </FieldBox>
            </div>
          </>
        )
      }
    </Styled>
  );
};

Form.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func,
  setFieldValue: PropTypes.func,
  setValues: PropTypes.func,
  bankAccTypes: PropTypes.object,
  states: PropTypes.arrayOf(PropTypes.object),
  yearsAfterCurrent: PropTypes.number
};

export default Form;