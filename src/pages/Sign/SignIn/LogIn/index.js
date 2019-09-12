import React from 'react';
import PropTypes from 'prop-types';

import Paragraph from 'app/components/common/Paragraph';
import Title from 'app/components/Layouts/Sign/Title';
import SignInForm from 'app/components/Forms/SignIn';
import Link from 'app/components/common/Link';

import Styled from './styles';

const LogIn = ({
  setSignPage,
  setUserEmail,
  goToPage,
  history,
  username
}) => (
  <Styled
    className="l-login"
  >
    <Title title="Login" />

    <div className="l-login__form-wrapper">
      <SignInForm
        goToPage={goToPage}
        setSignPage={setSignPage}
        setUserEmail={setUserEmail}
        history={history}
        username={username}
      />
    </div>

    <Paragraph
      textAlign="center"
      fontSize="14px"
    >
      Don’t have an account?
      {' '}
      <Link
        color="grey.1"
        onClick={goToPage('sign-up-step-1')}
      >
        Sign Up
      </Link>
    </Paragraph>
  </Styled>
);

LogIn.propTypes = {
  setSignPage: PropTypes.func,
  setUserEmail: PropTypes.func,
  goToPage: PropTypes.func,
  history: PropTypes.object,
  username: PropTypes.string
};

export default LogIn;