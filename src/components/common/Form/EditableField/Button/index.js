import React from 'react';

import Link from 'app/components/common/Link';

const Button = ({
  disabled,
  onClick,
  ...props
}) => (
  <Link
    fontWeight="500"
    fontSize="18px"
    lineHeight="24px"
    opacity={disabled ? '0.5' : '1'}
    disabled={disabled}
    onClick={!disabled ? onClick : undefined}
    noUnderline
    {...props}
  />
);

export default Button;