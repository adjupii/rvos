import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Title from 'app/components/Layouts/Sign/Title';
import ClarifyDataForm from 'app/components/Forms/ClarifyData';

const ClarifyData = ({
  userEmail,
  setSignPage,
  page
}) => (
  <Fragment>
    <Title title="Let&apos;s clarify the data" />

    <ClarifyDataForm
      userEmail={userEmail}
      setSignPage={setSignPage}
      page={page}
    />
  </Fragment>
);

ClarifyData.propTypes = {
  page: PropTypes.string,
  userEmail: PropTypes.string,
  setSignPage: PropTypes.func
};

export default ClarifyData;