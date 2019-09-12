import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Title from 'app/components/Layouts/Sign/Title';
import Form from 'app/components/Forms/CreatePassword';
import FormMessage from 'app/components/Layouts/Sign/FormMessage';

const CreatePassword = ({
  page,
  setPage,
  token,
  goToPage
}) => {
  if (page === 'message') {
    return (
      <FormMessage
        title="Password has been updated!"
        text="Your password was successfully updated. Login to work"
        buttonText="Login"
        iconName="Amazing"
        action={goToPage('sign-in-log-in')}
      />
    );
  }

  return (
    <Fragment>
      <Title title="Create password" />

      <Form
        token={token}
        setPage={setPage}
      />
    </Fragment>
  );
};

CreatePassword.propTypes = {
  page: PropTypes.string,
  setPage: PropTypes.func,
  token: PropTypes.string,
  goToPage: PropTypes.func
};

export default CreatePassword;