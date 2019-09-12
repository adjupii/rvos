import React from 'react';
import PropTypes from 'prop-types';

import { MASKS } from 'app/schemas';

import FormText from 'app/components/Layouts/FormText';
import Check from 'app/components/common/Form/Check';
import Field from 'app/components/common/Form/Field';

import Styled from './styles';

const Form = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldValue,
  handleRespondByType
}) => (
  <Styled
    className="c-contact-us-step-3"
    autoComplete="off"
  >
    <FormText>
      How should we respond you?
    </FormText>

    
    <div className="c-contact-us-step-3__check-holder">
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

    <div className="c-contact-us-step-3__check-holder">
      <Check
        type="radio"
        id="phone"
        name="respondByType"
        value="phone"
        checked={values.respondBy === 'phone'}
        label="By telephone"
        onChange={handleRespondByType}
      />
    </div>

    <div className="c-contact-us-step-3__input-holder">
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
  </Styled>
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