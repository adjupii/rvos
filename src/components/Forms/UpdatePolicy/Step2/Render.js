import React from 'react';
import PropTypes from 'prop-types';

import { MASKS } from 'app/schemas';

import FormText from 'app/components/Layouts/FormText';
import Check from 'app/components/common/Form/Check';
import Field from 'app/components/common/Form/Field';

const Form = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldValue,
  handleRespondByType
}) => (
  <form autoComplete="off">
    <FormText css="margin-bottom: 20px">
      How would you like to be contacted?
    </FormText>

    <div css="margin-bottom: 10px">
      <Check
        type="radio"
        id="email"
        name="respondBy"
        value="email"
        checked={values.respondBy === 'email'}
        label="By email"
        onChange={handleRespondByType}
      />
    </div>

    <div css="margin-bottom: 44px">
      <Check
        type="radio"
        id="phone"
        name="respondBy"
        value="phone"
        checked={values.respondBy === 'phone'}
        label="By telephone"
        onChange={handleRespondByType}
      />
    </div>

    <div
      css={`
        max-width: 263px;
        margin-bottom: 20px;
      `}
    >
      {
        values.respondBy === 'email'
          ? (
            <Field
              label="Your email"
              name="respondByValue"
              value={values.respondByValue}
              error={touched.respondByValue && errors.respondByValue}
              onChange={handleChange}
              onBlur={values.respondByValue ? handleBlur : undefined}
            />
          )
          : (
            <Field
              label="Your phone"
              name="respondByValue"
              mask={MASKS.phone}
              value={values.respondByValue}
              onChange={setFieldValue}
              error={errors.respondByValue}
            />
          )
      }
    </div>

    <Check
      type="checkbox"
      id="disclaimer"
      label="I understand that the requested change is not effective until approved by RVOS Insurance."
      checked={values.disclaimer}
      onChange={handleChange}
    />
  </form>
);

Form.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  setFieldValue: PropTypes.func,
  handleRespondByType: PropTypes.func
};

export default Form;