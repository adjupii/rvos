import React from 'react';
import PropTypes from 'prop-types';

import TitleWithIcon from 'app/components/EntityDetails/TitleWithIcon';
import Policy from '../Policy';

const AccountPolicies = ({
  data
}) => (
  <TitleWithIcon
    iconName="AccountPolicies"
    value="Policy Information"
  >
    {
      data.map((policy, index) => (
        <Policy
          key={policy.policyNo}
          data={policy}
          last={index === data.length - 1}
        />
      ))
    }
  </TitleWithIcon>
);

AccountPolicies.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default AccountPolicies;