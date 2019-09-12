import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

const Status = ({
  file = {}
}) => {
  return (
    <Styled className="profile-status">
      {
        file.error ? (
          <div className="profile-status__error">
            {file.error}
          </div>
        ) : null
      }

      <div className="profile-status__title">
        Your photo
      </div>
    </Styled>
  );
};

Status.propTypes = {
  file: PropTypes.object,
};

export default Status;