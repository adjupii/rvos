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
      Don&apos;t forget: The username is used to log into the RVOS Insurance system
    </FormText>

    <div css="margin-bottom: 30px">
      <Field
        label="New Username"
        name="username"
        value={values.username}
        error={touched.username && errors.username}
        onChange={handleChange}
        onBlur={values.username ? handleBlur : undefined}
      />
    </div>

    <div css="margin-bottom: 30px">
      <Field
        type="password"
        label="Your Password"
        name="password"
        value={values.password}
        autoComplete="new-password"
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