import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

import ArrowRight from 'app/components/Icons/ArrowRight';

const SeeAll = ({
  to,
  children
}) => (
  <Styled
    to={to}
    className="see-all"
  >
    {
      children && (
        <span className="see-all__text">
          {children}
        </span>
      )
    }

    <ArrowRight
      width="24"
      height="24"
      className="see-all__icon"
    />
  </Styled>
);

SeeAll.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node
};

export default SeeAll;