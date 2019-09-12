import React from 'react';
import PropTypes from 'prop-types';

import tooltips from 'app/tooltips';

import Paragraph from 'app/components/common/Paragraph';
import Field from 'app/components/common/Form/Field';
import Submit from 'app/components/common/Form/Submit';
import ApiError from 'app/components/common/Form/ApiError';

const Form = ({
  values,
  errors,
  handleChange,
  handleSubmit,
  handleBlur,
  isValid,
  isSubmitting,
  touched,
  initialValues
}) => (
  <form
    autoComplete="off"
    onSubmit={handleSubmit}
  >
    <div css="margin-bottom: 30px">
      <Field
        label="Your mail"
        name="email"
        value={values.email}
        error={touched.email && errors.email}
        onChange={handleChange}
        onBlur={values.email ? handleBlur : undefined}
        hasTooltip={!!initialValues.email}
        tooltip={(initialValues.email === values.email) ? tooltips.signUp.email : ''}
      />
    </div>

    <div css="margin-bottom: 30px">
      <Field
        label="Username"
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
        label="Password"
        name="plainPassword"
        autoComplete="new-password"
        value={values.plainPassword}
        error={touched.plainPassword && errors.plainPassword}
        onChange={handleChange}
        onBlur={values.plainPassword ? handleBlur : undefined}
        hasTooltip
        tooltip={tooltips.password}
        eye
      />
    </div>

    <div css="margin-bottom: 10px">
      <Field
        type="password"
        label="Password Repeat"
        name="passwordConfirm"
        value={values.passwordConfirm}
        error={touched.passwordConfirm && errors.passwordConfirm}
        onChange={handleChange}
        onBlur={values.passwordConfirm ? handleBlur : undefined}
        eye
      />
    </div>

    <Paragraph>
      By clicking Create an account, you agree to the RVOS Farm Mutual Insurance Company
      {' '}
      <a
        href="https://www.rvos.com/terms-use"
        rel="noopener noreferrer"
        target="_blank"
      >
        Terms of Service
      </a>.
    </Paragraph>

    {
      errors.apiError && (
        <ApiError>
          {errors.apiError}
        </ApiError>
      )
    }

    <Submit disabled={isSubmitting || !isValid}>
      Create an account
    </Submit>
  </form>
);

Form.propTypes = {
  values: PropTypes.object,
  initialValues: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  isValid: PropTypes.bool,
  isSubmitting: PropTypes.bool
};

export default Form;