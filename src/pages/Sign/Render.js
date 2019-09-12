import React from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotData from './ForgotData';

const Sign = ({
  page,
  setSignPage,
  goToPage,
  history,
  username
}) => {
  if (page.includes('sign-in')) {
    return (
      <SignIn
        setSignPage={setSignPage}
        goToPage={goToPage}
        history={history}
        username={username}
        page={page}
      />
    );
  }

  if (page.includes('sign-up')) {
    return (
      <SignUp
        setSignPage={setSignPage}
        goToPage={goToPage}
        page={page}
      />
    );
  }

  if (page.includes('forgot-data')) {
    return (
      <ForgotData
        setSignPage={setSignPage}
        goToPage={goToPage}
        page={page}
      />
    );
  }
};

export default Sign;