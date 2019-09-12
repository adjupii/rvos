import React from 'react';
import PropTypes from 'prop-types';

import Select from 'app/components/Select';
import Nav from '../Nav';

const PAGES_WITH_NAV = [
  'sign-in-log-in',
  'sign-up-step-1'
];

const NavContianer = ({
  page,
  navMobileItems,
  setSignPage
}) => {
  return (
    PAGES_WITH_NAV.includes(page) && (
      <>
        <Nav
          page={page}
          onChange={setSignPage}
        />

        <Select
          selected={page}
          items={navMobileItems}
          onChange={setSignPage}
          className="c-select--signin"
        />
      </>
    )
  );
};

NavContianer.defaultProps = {
  navMobileItems: [
    {
      id: 'sign-in-log-in',
      value: 'Login'
    },
    {
      id: 'sign-up-step-1', 
      value: 'Registration'
    }
  ]
};

NavContianer.propTypes = {
  page: PropTypes.string,
  navMobileItems: PropTypes.arrayOf(PropTypes.object),
  setSignPage: PropTypes.func,
};

export default NavContianer;