import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { MASKS } from 'app/schemas';
import tooltips from 'app/tooltips';

import Field from 'app/components/common/Form/Field';
import Submit from 'app/components/common/Form/Submit';
import Check from 'app/components/common/Form/Check';
import ApiError from 'app/components/common/Form/ApiError';

import Styled from './styles';

const Form = ({
  values,
  errors,
  handleChange,
  handleSubmit,
  handleBlur,
  isValid,
  isSubmitting,
  touched,
  setFieldValue,
  setFieldTouched,
}) => {
  const handleCheckId = useCallback(
    (type) => () => { 
      setFieldValue('checkId', type);
      setFieldValue('phone', '');
      setFieldValue('taxNo', '');
    },
    [ setFieldValue ]
  );

  return (
    <Styled
      autoComplete="off"
      onSubmit={handleSubmit}
      className="c-sign-up-step-1"
    >
      <div className="c-sign-up-step-1__field-wrapper">
        <Field
          label="Policy Number"
          name="policyNo"
          value={values.policyNo}
          error={touched.policyNo && errors.policyNo}
          onChange={handleChange}
          onBlur={values.policyNo ? handleBlur : undefined}
          hasTooltip
          tooltip={tooltips.signUp.policyNumber}
        />
      </div>

      <div className="c-sign-up-step-1__field-wrapper">
        <Field
          label="Full Name"
          name="fullName"
          value={values.fullName}
          error={touched.fullName && errors.fullName}
          onChange={handleChange}
          onBlur={values.fullName ? handleBlur : undefined}
          hasTooltip
          tooltip={tooltips.signUp.fullName}
        />

        <div className="c-sign-up-step-1__checkbox-wrapper">
          <Check
            type="radio"
            id="phone"
            value="phone"
            name="checkId"
            checked={values.checkId === 'phone'}
            label="Phone Number"
            onChange={handleCheckId('phone')}
          />
        </div>

        <div className="c-sign-up-step-1__checkbox-wrapper">
          <Check
            type="radio"
            id="taxNo"
            value="taxNo"
            name="checkId"
            checked={values.checkId === 'taxNo'}
            label="Last 4 symbols of SSN or Tax ID" 
            onChange={handleCheckId('taxNo')}
          />
        </div>
      </div> 

      {
        values.checkId === 'taxNo' && (
          <Field
            label="Last 4 digits of SSN or Tax Id"
            name="taxNo"
            value={values.taxNo}
            error={touched.taxNo && errors.taxNo}
            onChange={setFieldValue}
            onBlur={values.taxNo ? setFieldTouched : undefined}
            mask={MASKS.taxNo}
            hasTooltip
            tooltip={tooltips.signUp.taxNo}
          />
        )
      }

      {
        values.checkId === 'phone' && (
          <Field
            label="Phone Number"
            name="phone"
            value={values.phone}
            error={touched.phone && errors.phone}
            onChange={setFieldValue}
            onBlur={values.phone ? setFieldTouched : undefined}
            mask={MASKS.phone}
            hasTooltip
            tooltip={tooltips.signUp.phone}
          />
        )
      }

      {
        errors.apiError && (
          <ApiError>
            {errors.apiError}
          </ApiError>
        )
      }

      <Submit disabled={isSubmitting || !isValid}>
        Continue
      </Submit>
    </Styled>
  );
};

Form.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleCheckChange: PropTypes.func,
  selectedField: PropTypes.string,
  isValid: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  setFieldValue: PropTypes.func,
  setFieldTouched: PropTypes.func,
};

export default Form;