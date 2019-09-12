import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import navConfig from 'app/components/Layouts/App/Nav/config';

import Styled from './styles';

import Close from 'app/components/Icons/Close';
import NavIcons from 'app/components/Icons/Nav';
import NavLink from './NavLink';

const NavMobile = ({
  navIsOpen,
  toggleNav
}) => (
  <Styled
    className={
      classNames(
        'nav-mobile',
        { 'nav-mobile--is-open': navIsOpen }
      )
    }
  >
    <Close
      width="24"
      height="24"
      onClick={toggleNav}
      className="nav-mobile__close"
    />

    {
      Object.keys(navConfig).map(key => {
        const {
          title,
          iconName,
          url
        } = navConfig[key];

        return (
          <NavLink
            key={key}
            to={url}
            title={title}
            icon={NavIcons[iconName]}
          />
        );
      })
    }
  </Styled>
);

NavMobile.propTypes = {
  navIsOpen: PropTypes.bool,
  toggleNav: PropTypes.func
};

export default NavMobile;