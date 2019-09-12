import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { onReceiptEmailId } from './Logic';

import Styled from './styles';

import Check from 'app/components/common/Form/Check';
import FieldBox from '../FieldBox';
import Field from 'app/components/common/Form/Field';
import FormText from 'app/components/Layouts/FormText';

const Form = ({
  values,
  errors,
  touched,
  user: {
    customer: { email }
  },
  handleChange,
  handleBlur,
  setFieldTouched,
  setValues
}) => {
  const handleReceiptEmailId = useCallback(
    ({ target: { value } }) => {
      onReceiptEmailId(value, email, setFieldTouched, setValues);
    },
    [
      email,
      setFieldTouched,
      setValues
    ]
  );

  return (
    <Styled
      autoComplete="off"
      className="make-payment-step-3"
    >
      <div className="make-payment-step-3__check-holder">
        <Check
          type="radio"
          name="receiptEmailId"
          id="noNeeded"
          label="No receipt needed"
          value="noNeeded"
          checked={values.receiptEmailId === 'noNeeded'}
          onChange={handleReceiptEmailId}
        />
      </div>

      {
        email && (
          <div className="make-payment-step-3__check-holder">
            <Check
              type="radio"
              name="receiptEmailId"
              id="email"
              label={email}
              value="email"
              checked={values.receiptEmailId === 'email'}
              onChange={handleReceiptEmailId}
            />
          </div>
        )
      }

      <Check
        type="radio"
        name="receiptEmailId"
        id="another"
        label={
          email
            ? 'Another email address'
            : 'Please enter an email address'
        }
        value="another"
        checked={values.receiptEmailId === 'another'}
        onChange={handleReceiptEmailId}
      />

      {
        values.receiptEmailId === 'another' && (
          <>
            <FieldBox className="make-payment-field-box--size-big">
              <Field
                label="Email address"
                name="receiptEmail"
                value={values.receiptEmail}
                error={touched.receiptEmail && errors.receiptEmail}
                onChange={handleChange}
                onBlur={values.receiptEmail ? handleBlur : undefined}
              />
            </FieldBox>

            <div className="make-payment-step-3__text-holder">
              <FormText>
                This address will be used one-time only.<br />You can add or change your permanent email address <Link to="/app/profile">here</Link>.
              </FormText>
            </div>
          </>
        )
      }
    </Styled>
  );
};

Form.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  setFieldTouched: PropTypes.func,
  setValues: PropTypes.func,
  user: PropTypes.object
};

export default Form;