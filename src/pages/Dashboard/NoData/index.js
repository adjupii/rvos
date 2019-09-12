import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

import NoPolicies from 'app/components/Icons/NoPolicies';
import NoBillings from 'app/components/Icons/NoBillings';

const ICONS = {
  NoPolicies,
  NoBillings
};

const NoData = ({
  iconName,
  children
}) => {
  const Icon = ICONS[iconName];

  return (
    <Styled className="dashboard-no-data">
      {
        Icon && (
          <Icon
            width="100"
            height="100"
            className="dashboard-no-data__icon"
          />
        )
      }
  
      <div className="dashboard-no-data__text">
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