import React from 'react';
import PropTypes from 'prop-types';

import FormText from 'app/components/Layouts/FormText';
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
  touched,
  page
}) => (
  <form
    autoComplete="off"
    onSubmit={handleSubmit}
  >
    <FormText css="margin-bottom: 40px">
      {page.text}
    </FormText>

    <Field
      label="Enter your email"
      name="email"
      value={values.email}
      error={touched.email && errors.email}
      onChange={handleChange}
      onBlur={values.email ? handleBlur : undefined}
    />

    <Submit disabled={isSubmitting || !isValid}>
      {page.btnLabel}
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
  isSubmitting: PropTypes.bool,
  page: PropTypes.object
};

export default Form;