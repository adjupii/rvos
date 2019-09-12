import React from 'react';
import PropTypes from 'prop-types';

import tooltips from 'app/tooltips';

import Field from 'app/components/common/Form/Field';
import Submit from 'app/components/common/Form/Submit';

const Form = ({
  values,
  errors,
  handleChange,
  handleSubmit,
  handleBlur,
  isValid,
  isSubmitting,
  touched
}) => (
  <form
    autoComplete="off"
    onSubmit={handleSubmit}
  >
    <div css="margin-bottom: 30px">
      <Field
        type="password"
        label="Password"
        name="password"
        value={values.password}
        error={touched.password && errors.password}
        onChange={handleChange}
        onBlur={values.password ? handleBlur : undefined}
        hasTooltip
        tooltip={tooltips.password}
        eye
      />
    </div>

    <div css="margin-bottom: 30px">
      <Field
        type="password"
        label="Password Repeat"
        name="passwordConfirm"
        value={values.passwordConfirm}
        error={touched.passwordConfirm && errors.passwordConfirm}
        onChange={handleChange}
        onBlur={values.passwordConfirm ? handleBlur : undefined}
      />
    </div>

    <Submit disabled={isSubmitting || !isValid}>
      Create password
    </Submit>
  </form>
);

Form.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  isValid: PropTypes.bool,
  isSubmitting: PropTypes.bool
};

export default Form;