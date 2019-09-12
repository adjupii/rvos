import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

import { Container } from 'app/components/common/Grid';

const Header = ({
  children
}) => (
  <Styled className="header">
    <Container>
      <div className="header__holder">
        {children}
      </div>
    </Container>
  </Styled>
);

Header.propTypes = {
  children: PropTypes.node
};

export default Header;