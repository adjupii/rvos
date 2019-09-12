import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavItem = ({
  active,
  children,
  onClick
}) => (
  <div
    className={
      classNames(
        'nav__item',
        { 'nav__item--active': active }
      )
    }
  >
    <div
      className="nav__link"
      onClick={onClick}
    >
      {children}
    </div>

    <div className="nav__border" />
  </div>
);

NavItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

export default NavItem;