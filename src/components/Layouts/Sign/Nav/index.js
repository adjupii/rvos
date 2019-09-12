import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

import NavItem from './NavItem';

const Nav = ({
  page,
  onChange
}) => { 
  const handleChange = useCallback(
    page => () => {
      onChange(page);
    }, [ onChange ]
  );

  return (
    <Styled className="nav">
      <NavItem
        active={page === 'sign-in-log-in'}
        onClick={handleChange('sign-in-log-in')}
      >
        Login
      </NavItem>

      <NavItem
        active={page === 'sign-up-step-1'}
        onClick={handleChange('sign-up-step-1')}
      >
        Registration
      </NavItem>
    </Styled> 
  );
};

Nav.propTypes = {
  page: PropTypes.string,
  onChange: PropTypes.func,
};

export default Nav;