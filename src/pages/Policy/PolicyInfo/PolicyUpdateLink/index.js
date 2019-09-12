import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

import Update from 'app/components/Icons/Update';

const PolicyUpdateLink = ({
  policyNumber
}) => (
  <Styled
    to={`/app/policies/${policyNumber}/update`}
    className="policy-update-link"
  >
    <Update
      width="16"
      height="16"
    />

    <span>
      Update policy
    </span>
  </Styled>
);

PolicyUpdateLink.propTypes = {
  policyNumber: PropTypes.string
};

export default PolicyUpdateLink;