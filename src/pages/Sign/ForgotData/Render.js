import React from 'react';

import ForgotDataStep1 from './Step1';
import ForgotDataStep2 from './Step2';
import ClarifyData from './ClarifyData';

const pages = {
  'forgot-data-password': {
    name: 'password',
    title: 'Forgot your password ?',
    text: 'Please enter email address below and we’ll get you back on track.',
    btnLabel: 'Request reset link'
  },
  'forgot-data-username': {
    name: 'username',
    title: 'Forgot username',
    text: 'Please enter your email address to get instructions on how to recover your username',
    btnLabel: 'Send reset email'
  },
  'forgot-data-step-2-password': { name: 'password' },
  'forgot-data-step-2-username': { name: 'username' }
};

const ForgotData = ({
  page,
  setSignPage,
  goToPage,
  userEmail,
  setUserEmail
}) => {
  if (page === 'forgot-data-password' || page === 'forgot-data-username') {
    return (
      <ForgotDataStep1
        setSignPage={setSignPage}
        goToPage={goToPage}
        setUserEmail={setUserEmail}
        page={pages[page]}
      />
    );
  }

  if (page === 'forgot-data-step-2-password' || page === 'forgot-data-step-2-username') {
    return (
      <ForgotDataStep2 page={pages[page]} />
    );
  }

  if (page === 'forgot-data-clarify-password' || page === 'forgot-data-clarify-username') {
    return (
      <ClarifyData
        userEmail={userEmail}
        setSignPage={setSignPage}
        page={pages[page]}
      />
    );
  }
};

export default ForgotData;