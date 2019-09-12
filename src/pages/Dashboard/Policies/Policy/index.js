import React from 'react';
import PropTypes from 'prop-types';

import useGoToPage from 'app/hooks/useGoToPage';

import Styled from './styles';

import PolicyStatus from 'app/components/Policies/PolicyStatus';
import PolicyInfoHead from 'app/components/Policies/PolicyInfoHead';
import PolicyAddressDate from 'app/components/Policies/PolicyAddressDate';

const Policy = ({
  policy
}) => {
  const handlePolicy = useGoToPage(`/app/policies/${policy.policyNumber}`);

  return (
    <Styled
      className="policy"
      onClick={handlePolicy}
    >
      <PolicyStatus
        status={policy.status}
        className="in-dashboard"
      />

      <div className="policy__holder">
        <PolicyInfoHead
          policy={policy}
          className="in-dashboard"
        />

        <PolicyAddressDate
          address={policy.address}
          date={{
            beginDate: policy.beginDate,
            endDate: policy.endDate
          }}
          className="in-dashboard"
        />
      </div>
    </Styled>
  );
};

Policy.propTypes = {
  policy: PropTypes.object
};

export default Policy;