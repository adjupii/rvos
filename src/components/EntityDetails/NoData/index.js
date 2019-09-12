import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

import PoliciesNoData from 'app/components/Icons/PoliciesNoData';
import ClaimsNoData from 'app/components/Icons/ClaimsNoData';
import BillingNoData from 'app/components/Icons/BillingNoData';
import Sandglass from 'app/components/Icons/Sandglass';

const ICONS = {
  PoliciesNoData,
  ClaimsNoData,
  BillingNoData,
  Sandglass
};

const NoData = ({
  iconName,
  children
}) => {
  const Icon = ICONS[iconName];

  return (
    <Styled className="c-entity-no-data">
      {
        Icon && (
          <Icon
            width="110"
            height="110"
            className="c-entity-no-data__icon"
          />
        )
      }

      <div className="c-entity-no-data__text">
        {children}
      </div>
    </Styled>
  );
};

NoData.propTypes = {
  iconName: PropTypes.string,
  children: PropTypes.node
};

export default NoData;