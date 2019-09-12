import React from 'react';
import PropTypes from 'prop-types';

import ArrowDownFill from 'app/components/Icons/ArrowDownFill';

const Selected = ({
  onClick,
  value
}) => (
  <div
    className="c-select__selected"
    onClick={onClick}
  >
    <div className="c-select__selected-value">
      {value}
    </div>

    <ArrowDownFill
      width="24"
      height="24"
      className="c-select__arrow-icon"
    />
  </div>
);

Selected.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.node
};

export default Selected;