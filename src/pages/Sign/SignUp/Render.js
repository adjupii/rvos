import React from 'react';

import SignUpStep1 from './Step1';
import SignUpStep2 from './Step2';
import SignUpStep3 from './Step3';

const SignUp = ({
  page,
  setSignPage,
  goToPage,
  setUserData,
  userData
}) => {
  if (page === 'sign-up-step-1') {
    return (
      <SignUpStep1
        setSignPage={setSignPage}
        goToPage={goToPage}
        setUserData={setUserData}
        userData={userData}
      />
    );
  }

  if (page === 'sign-up-step-2') {
    return (
      <SignUpStep2
        setSignPage={setSignPage}
        goToPage={goToPage}
        userData={userData}
        setUserData={setUserData}
      />
    );
  }

  if (page === 'sign-up-step-3') {
    return (
      <SignUpStep3
        userEmail={userData.email}
      />
    );
  }
};

export default SignUp;