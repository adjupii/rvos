import React from 'react';
import PropTypes from 'prop-types';

import Title from 'app/components/Layouts/Sign/Title';
import SignUpFormStep2 from 'app/components/Forms/SignUp/Step2';

const SignUpStep2 = ({
  goToPage,
  setSignPage,
  setUserData,
  userData
}) => (
  <>
    <Title
      title="Add login information"
      backAction={goToPage('sign-up-step-1')}
    />

    <SignUpFormStep2
      setSignPage={setSignPage}
      userData={userData}
      setUserData={setUserData}
    />
  </>
);

SignUpStep2.propTypes = {
  goToPage: PropTypes.func,
  setSignPage: PropTypes.func,
  setUserData: PropTypes.func,
  userData: PropTypes.object
};

export default SignUpStep2;