import React from 'react';
import PropTypes from 'prop-types';

import Claim from 'app/pages/Claims/Claim';

const ClaimList = ({
  claims
}) => (
  claims.length
    ? (
      claims.map(claim => (
        <Claim
          key={claim.claimNumber || claim.fnolNo}
          data={claim}
          className="in-dashboard"
        />
      ))
    )
    : null
);

ClaimList.propTypes = {
  claims: PropTypes.arrayOf(PropTypes.object)
};

export default ClaimList;