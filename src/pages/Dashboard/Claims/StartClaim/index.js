import React from 'react';

import useGoToPage from 'app/hooks/useGoToPage';

import Styled from './styles';

import PlusInCircle from 'app/components/Icons/PlusInCircle';

const StartClaim = () => {
  const handleClick = useGoToPage('/app/claims/claim/create');

  return (
    <Styled
      className="start-claim"
      onClick={handleClick}
    >
      <div className="start-claim__icon">
        <PlusInCircle
          width="24"
          height="24"
        />
      </div>
  
      <div className="start-claim__text">
        Start a claim
      </div>
    </Styled>
  );
};

export default StartClaim;