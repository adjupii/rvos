import React from 'react';
import { NavLink as ReactNavLink } from 'react-router-dom';

const NavLink = ({
  icon: Icon,
  title,
  ...props
}) => (
  <ReactNavLink
    className="nav-mobile__link"
    activeClassName="nav-mobile__link--active"
    {...props}
  >
    <Icon
      width="26"
      height="26"
      className="nav-mobile__link-icon"
    />

    <span className="nav-mobile__link-title">
      {title}
    </span>

    <span className="nav-mobile__link-sep" />
  </ReactNavLink>
);

export default NavLink;