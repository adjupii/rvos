import React from 'react';
import PropTypes from 'prop-types';

import CreatePassword from './CreatePassword';
import FormMessage from 'app/components/Layouts/Sign/FormMessage';
import Loader from 'app/components/common/Loader';

const RestorePassword = ({
  isFetching,
  status,
  goToPage,
  match: { params },
  setPage,
  page
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
          <CreatePassword
            goToPage={goToPage}
            token={params.token}
            setPage={setPage}
            page={page}
          />
        );

      case 400:
      case 405:
        return (
          <FormMessage
            title="Resend password link"
            text="Your changing password link has expired or has been damaged. Please enter your data again to receive new link"
            buttonText="Enter the data"
            action={goToPage('forgot-data-password')}
            iconName="LetterError"
          />
        );
    }
  }

  return null;
};

RestorePassword.propTypes = {
  isFetching: PropTypes.bool,
  status: PropTypes.number,
  history: PropTypes.object,
  match: PropTypes.object,
  goToPage: PropTypes.func,
  setPage: PropTypes.func,
  page: PropTypes.string
};

export default RestorePassword;