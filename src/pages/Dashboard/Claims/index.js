import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

import Title from 'app/components/Layouts/App/Title';
import SeeAll from '../SeeAll';
import StartClaim from './StartClaim';
import ClaimList from './ClaimList';

const Claims = ({
  openClaims,
  closedClaims
}) => (
  <Styled className="claims">
    <Title
      title="Recent Claims"
      className="c-app-title--in-dashboard"
    >
      <SeeAll to="/app/claims" />
    </Title>

    <StartClaim />

    <ClaimList claims={openClaims} />

    <ClaimList claims={closedClaims} />
  </Styled>
);

Claims.propTypes = {
  openClaims: PropTypes.arrayOf(PropTypes.object),
  closedClaims: PropTypes.arrayOf(PropTypes.object)
};

export default Claims;