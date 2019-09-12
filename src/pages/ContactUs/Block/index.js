import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Styled from './styles.js';

const Block = ({
  children,
  icon,
  className
}) => (
  <Styled
    className={
      classNames(
        'c-contact-us-block',
        className
      )
    }
  >
    <div className="c-contact-us-block__icon-wrap">
      {icon}
    </div>
    <div className="c-contact-us-block__info-wrap">
      {children}
    </div>
  </Styled>
);

Block.propTypes = {
  icon: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Block;