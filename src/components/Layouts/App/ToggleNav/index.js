import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

import ToggleNavIcon from 'app/components/Icons/ToggleNav';

const ToggleNav = ({
  onClick
}) => (
  <Styled className="toggle-nav">
    <ToggleNavIcon
      width="17"
      height="16"
      onClick={onClick}
      className="toggle-nav__icon"
    />
  </Styled>
);

ToggleNav.propTypes = {
  onClick: PropTypes.func
};

export default ToggleNav;