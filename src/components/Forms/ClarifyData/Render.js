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
  touched
}) => (
  <form
    autoComplete="off"
    onSubmit={handleSubmit}
  >
    <FormText css="margin-bottom: 40px">
      Please enter the Number of any of your Policies
    </FormText>

    <Field
      label="Policy Number"
      name="policyNo"
      value={values.policyNo}
      error={touched.policyNo && errors.policyNo}
      onChange={handleChange}
      onBlur={values.policyNo ? handleBlur : undefined}
    />
    
    <Submit disabled={isSubmitting || !isValid}>
      Continue
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