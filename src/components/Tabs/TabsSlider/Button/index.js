import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ArrowLeft from 'app/components/Icons/ArrowLeft';
import ArrowRight from 'app/components/Icons/ArrowRight';

const ICONS = {
  prev: ArrowLeft,
  next: ArrowRight
};

const Button = ({
  name,
  isDisabled,
  action
}) => {
  const
    Icon = ICONS[name],
    onClick = !isDisabled ? action : undefined;

  return (
    <div
      className={
        classNames(
          'tabs-slider__btn',
          { 'tabs-slider__btn--disabled': isDisabled }
        )
      }
    >
      <Icon
        width="24"
        height="24"
        onClick={onClick}
        className="tabs-slider__btn-icon"
      />
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  isDisabled: PropTypes.bool,
  action: PropTypes.func
};

export default Button;