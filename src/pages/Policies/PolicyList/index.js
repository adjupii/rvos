import React from 'react';
import PropTypes from 'prop-types';

import Policy from '../Policy';

const PolicyList = ({
  policies,
  claims,
  billing
}) => (
  policies.map(policy => (
    <Policy
      key={policy.policyNumber}
      policy={policy}
      claims={claims[policy.policyNumber]}
      billing={billing[policy.policyNumber]}
    />
  ))
);

PolicyList.propTypes = {
  policies: PropTypes.arrayOf(PropTypes.object),
  claims: PropTypes.object,
  billing: PropTypes.object
};

export default PolicyList;