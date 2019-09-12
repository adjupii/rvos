import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import useScrollToTop from 'app/hooks/useScrollToTop';

import { getClaimLink } from 'app/helpers/claim';

import Styled from './styles';

import Letter from 'app/components/Icons/Letter';

const SuccessMessage = ({
  fnolNumber
}) => {
  useScrollToTop();

  return (
    <Styled className="create-claim-success-message">
      <div className="create-claim-success-message__icon">
        <Letter
          width="110"
          height="110"
        />
      </div>
  
      <div className="create-claim-success-message__message">
        Your claim request has been successfully sent.<br />You can upload photos of the incident by visiting the
        {' '}
        <Link
          to={
            getClaimLink(
              { fnolNo: fnolNumber },
              { openTabIndex: 2 }
            )
          }
        >
          Claim Documents
        </Link>
        {' '}
        page.
      </div>
  
      <div className="create-claim-success-message__ref-number">
        Reference number:<br />{fnolNumber}
      </div>
    </Styled>
  );
};

SuccessMessage.propTypes = {
  fnolNumber: PropTypes.string
};

export default SuccessMessage;