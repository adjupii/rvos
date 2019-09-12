import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Styled from './styles';

const STATUS_COLORS = {
  active: 'green-1',
  closed: 'red-1'
};

const Status = ({
  status,
  className
}) => (
  <Styled
    className={
      classNames(
        'entity-details-status',
        className
      )
    }
    color={STATUS_COLORS[status]}
  />
);

Status.propTypes = {
  status: PropTypes.string,
  className: PropTypes.string
};

export default Status;