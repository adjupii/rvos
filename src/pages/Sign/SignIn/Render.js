import React from 'react';

import LogIn from './LogIn';
import ConfirmAccount from './ConfirmAccount';

const SignIn = ({
  page,
  setSignPage,
  goToPage,
  userEmail,
  setUserEmail,
  history,
  username
}) => {
  if (page === 'sign-in-log-in') {
    return (
      <LogIn
        setSignPage={setSignPage}
        goToPage={goToPage}
        setUserEmail={setUserEmail}
        history={history}
        username={username}
      />
    );
  }
  
  if (page === 'sign-in-confirm-account') {
    return (
      <ConfirmAccount
        goToPage={goToPage}
        userEmail={userEmail}
      />
    );
  }
};

export default SignIn;