import React from 'react';
import PropTypes from 'prop-types';

import FormMessage from 'app/components/Layouts/Sign/FormMessage';
import Loader from 'app/components/common/Loader';

const ConfirmEmail = ({
  isFetching,
  status,
  goToPage
}) => {
  if (isFetching) {
    return (
      <Loader
        width="80"
        height="80"
      />
    );
  }

  if (status) {
    switch (status) {
      case 200:
        return (
          <FormMessage
            title="Thanks for registering!"
            text="You are successfully registered to RVOS. Login to start working"
            buttonText="Log In"
            iconName="Amazing"
            action={goToPage('/sign/in')}
          />
        );

      case 400:
      case 405:
        return (
          <FormMessage
            title="Resend verification link"
            text="Your verification link has expired or has been damaged. Please login to the system to request a new link."
            buttonText="Log In"
            iconName="LetterError"
            action={goToPage('/sign/in')}
          />
        );
        
      default:
        return null;
    }
  }

  return null;
};

ConfirmEmail.propTypes = {
  isFetching: PropTypes.bool,
  status: PropTypes.number,
  goToPage: PropTypes.func
};

export default ConfirmEmail;