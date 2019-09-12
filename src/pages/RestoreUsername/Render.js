import React from 'react';
import PropTypes from 'prop-types';

import FormMessage from 'app/components/Layouts/Sign/FormMessage';
import Loader from 'app/components/common/Loader';

const RestoreUsername = ({
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

  if (status === 400 || status === 405) {
    return (
      <FormMessage
        title="Resend username link"
        text="Your getting username link has expired or has been damaged. Please enter your data again to receive new link"
        buttonText="Enter the data"
        iconName="LetterError"
        action={goToPage('forgot-data-username')}
      />
    );
  }

  return null;
};

RestoreUsername.propTypes = {
  isFetching: PropTypes.bool,
  status: PropTypes.number,
  goToPage: PropTypes.func
};

export default RestoreUsername;