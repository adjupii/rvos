import React from 'react';
import PropTypes from 'prop-types';

import Field from 'app/components/common/Form/Field';
import Submit from 'app/components/common/Form/Submit';
import FormText from 'app/components/Layouts/FormText';

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
    <FormText css="margin-bottom: 40px">
      An email will be sent to your new email address for verification
    </FormText>

    <div css="margin-bottom: 30px">
      <Field
        label="New Email"
        name="email"
        value={values.email}
        error={touched.email && errors.email}
        onChange={handleChange}
        onBlur={values.email ? handleBlur : undefined}
      />
    </div>

    <div css="margin-bottom: 30px">
      <Field
        type="password"
        label="Your Password"
        name="password"
        autoComplete="new-password"
        value={values.password}
        error={touched.password && errors.password}
        onChange={handleChange}
        onBlur={values.password ? handleBlur : undefined}
        eye
      />
    </div>

    <Submit disabled={isSubmitting || !isValid}>
      Save
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