import React from 'react';
import { NavLink } from 'react-router-dom';

import navConfig from './config';

import Styled from './styles';

const Nav = () => (
  <Styled className="nav">
    {
      Object.keys(navConfig).map(key => {
        const {
          title,
          url
        } = navConfig[key];

        return (
          <NavLink
            key={key}
            to={url}
            className="nav__link"
            activeClassName="nav__link--active"
          >
            {title}
          </NavLink>
        );
      })
    }
  </Styled>
);

export default Nav;