import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getClaimLink } from 'app/helpers/claim';
import { date } from 'app/format';

import Styled from './styles';

import Claim from 'app/components/Icons/Claim';
import ClaimStatusOpen from 'app/components/Icons/ClaimStatusOpen';
import Pending from 'app/pages/Claims/Claim/Pending';

const PolicyClaim = ({
  claim
}) => {
  const handleStopBubbling = useCallback(
    e => {
      e.stopPropagation();
    },
    []
  );

  return (
    <Styled className="policy-claim">
      <div className="policy-claim__status-holder">
        <div className="policy-claim__status">
          <ClaimStatusOpen
            width="18"
            height="18"
          />
        </div>

        <div className="policy-claim__loss-type">
          {claim.lossType}
        </div>
      </div>

      <div className="policy-claim__right">
        <div className="policy-claim__number">
          {
            claim.claimNumber
              ? (
                <>
                  <Claim
                    width="24"
                    height="24"
                    className="policy-claim__number-icon"
                  />

                  <div>
                    {claim.claimNumber}
                  </div>
                </>
              )
              : <Pending>Pending</Pending>
          }
        </div>

        <div className="policy-claim__loss-date">
          {date(claim.lossDate)}
        </div>

        <Link
          to={getClaimLink(claim)}
          onClick={handleStopBubbling}
          className="policy-claim__show-claim"
        >
          Show claim
        </Link>
      </div>
    </Styled>
  );
};

PolicyClaim.propTypes = {
  claim: PropTypes.object
};

export default PolicyClaim;