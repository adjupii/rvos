import React from 'react';
import PropTypes from 'prop-types';

import Claim from '../Claim';

const ClaimList = ({
  claims
}) => (
  <div css="padding-bottom: 20px">
    {
      claims.map(claim => (
        <Claim
          key={claim.claimNumber || claim.fnolNo}
          data={claim}
          className="in-claim-center"
        />
      ))
    }
  </div>
);

ClaimList.propTypes = {
  claims: PropTypes.arrayOf(PropTypes.object)
};

export default ClaimList;