import React from 'react';
import PropTypes from 'prop-types';

import Paragraph from 'app/components/common/Paragraph';
import Link from 'app/components/common/Link';
import Title from 'app/components/Layouts/Sign/Title';
import SignUpFormStep1 from 'app/components/Forms/SignUp/Step1';

import Styled from './styles';

const SignUpStep1 = ({
  setSignPage,
  goToPage,
  setUserData,
  userData
}) => (
  <Styled
    className="l-sign-up-step-1"
  >
    <Title title="Registration" />

    <div className="l-sign-up-step-1__form-wrapper">
      <SignUpFormStep1
        setSignPage={setSignPage}
        setUserData={setUserData}
        userData={userData}
      />
    </div>

    <Paragraph
      textAlign="center"
      fontSize="14px"
    >
      Already have an account?
      {' '}
      <Link
        color="grey.1"
        onClick={goToPage('sign-in-log-in')}
      >
        Sign In
      </Link>
    </Paragraph>
  </Styled>
);

SignUpStep1.propTypes = {
  setSignPage: PropTypes.func,
  goToPage: PropTypes.func,
  setUserData: PropTypes.func,
  userData: PropTypes.object
};

export default SignUpStep1;