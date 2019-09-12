import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

import Rotate from 'app/components/common/Rotate';
import ArrowDown from 'app/components/Icons/ArrowDown';

const Expander = ({
  isExpanded,
  onClick
}) => (
  <Styled className="c-expander">
    <Rotate to={isExpanded ? 180 : 0}>
      <ArrowDown
        width="12"
        height="8"
        onClick={onClick}
      />
    </Rotate>
  </Styled>
);

Expander.propTypes = {
  isExpanded: PropTypes.bool,
  onClick: PropTypes.func
};

export default Expander;