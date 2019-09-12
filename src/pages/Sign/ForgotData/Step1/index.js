import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Title from 'app/components/Layouts/Sign/Title';
import ForgotDataForm from 'app/components/Forms/ForgotData';

const ForgotDataStep1 = ({
  goToPage,
  setUserEmail,
  setSignPage,
  page
}) => (
  <Fragment>
    <Title
      title={page.title}
      backAction={goToPage('sign-in-log-in')}
    />

    <ForgotDataForm
      setUserEmail={setUserEmail}
      goToPage={goToPage}
      setSignPage={setSignPage}
      page={page}
    />
  </Fragment>
);

ForgotDataStep1.propTypes = {
  setSignPage: PropTypes.func,
  setUserEmail: PropTypes.func,
  goToPage: PropTypes.func,
  page: PropTypes.object
};

export default ForgotDataStep1;