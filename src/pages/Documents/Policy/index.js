import React from 'react';
import PropTypes from 'prop-types';

import {
  joinedText,
  date
} from 'app/format';
import { goToPage } from 'app/history';

import Styled from './styles';

import PolicyIcon from 'app/components/new/Icons/Nav/Policies';

const Policy = ({ policy }) => (
  <Styled
    billet="gradient-1"
    billetPosition="left"
    className="documents-policy"
    onClick={goToPage(`/app/policies/${policy.policyNumber}/documents`)}
  >
    <div className="documents-policy__wrapper">
      <div className="documents-policy__desc-holder">
        <PolicyIcon
          width="26"
          height="26"
          className="documents-policy__icon"
        />

        <div className="documents-policy__inner">
          <div>
            <div className="documents-policy__desc">
              {
                joinedText(
                  [ policy.lineOfBusiness, policy.typeDescShort ],
                  { sep: ' | ' }
                ).toUpperCase()
              }
            </div>

            <div className="documents-policy__number">
              {policy.policyNumber}
            </div>
          </div>

          <div className="documents-policy__date">
            {date(policy.beginDate)}
          </div>
        </div>
      </div>
    </div>
  </Styled>
);

Policy.propTypes = {
  policy: PropTypes.object
};

export default Policy;