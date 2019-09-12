import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Styled from './styles';

import Image from 'app/components/new/Image';
import LogoImg from 'app/images/logo.svg';

const Logo = ({
  to,
  className
}) => (
  <Styled
    className={
      classNames(
        'logo',
        className
      )
    }
  >
    <Link to={to}>
      <Image
        src={LogoImg}
        alt="My RVOS"
      />
    </Link>
  </Styled>
);

Logo.defaultProps = {
  to: '/app/dashboard'
};

Logo.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string
};

export default Logo;