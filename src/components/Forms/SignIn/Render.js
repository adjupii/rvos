import React from 'react';
import PropTypes from 'prop-types';

import Field from 'app/components/common/Form/Field';
import Link from 'app/components/common/Link';
import Submit from 'app/components/common/Form/Submit';
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
  goToPage,
  username
}) => (
  <Styled
    autoComplete="off"
    onSubmit={handleSubmit}
    className="c-signin-form"
  >
    <div className="c-signin-form__field-wrapper">
      <Field
        label="Username"
        name="username"
        value={values.username}
        error={touched.username && errors.username}
        onChange={handleChange}
        onBlur={values.username ? handleBlur : undefined}
        readOnly={!!username}
      />
    </div>

    {
      !username && (
        <div className="c-signin-form__help-link" >
          <Link
            onClick={goToPage('forgot-data-username')}
            fontFamily="muli"
            fontWeight="600"
          >
            Forgot username
          </Link>
        </div>
      )
    }

    <div className="c-signin-form__field-wrapper">
      <Field
        type="password"
        label="Password"
        name="password"
        value={values.password}
        autoComplete="new-password"
        error={touched.password && errors.password}
        onChange={handleChange}
        onBlur={values.password ? handleBlur : undefined}
        eye
      />
    </div>

    <div className="c-signin-form__help-link">
      <Link
        onClick={goToPage('forgot-data-password')}
        fontFamily="muli"
        fontWeight="600"
      >
        Forgot password
      </Link>
    </div>

    {
      errors.apiError && (
        <ApiError>
          {errors.apiError}
        </ApiError>
      )
    }

    <Submit disabled={isSubmitting || !isValid}>
      Sign In
    </Submit>
  </Styled>
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
  goToPage: PropTypes.func,
  username: PropTypes.string
};

export default Form;