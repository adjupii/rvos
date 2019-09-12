import React from 'react';

import BaseInput from './BaseInput';
import MaskedInput from './MaskedInput';

const Input = ({
  mask,
  ...props
}) => (
  mask
    ? (
      <MaskedInput
        mask={mask}
        {...props}
      />
    )
    : <BaseInput {...props} />
);

export default Input;