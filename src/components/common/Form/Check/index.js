import React from 'react';

import Styled from './styles';

import Icon from './Icon';

const Check = ({
  type,
  id,
  label,
  checked,
  ...props
}) => (
  <Styled className="form-check">
    <input
      type={type}
      id={id}
      checked={checked}
      {...props}
    />

    <Icon
      className="form-check__icon"
      type={type}
      selected={checked}
    />

    <label
      className="form-check__label"
      htmlFor={id}
    >
      {label}
    </label>
  </Styled>
);

export default Check;