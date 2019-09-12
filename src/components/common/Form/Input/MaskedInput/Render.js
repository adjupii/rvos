import React from 'react';
import ReactTextMask from 'react-text-mask';

import Input from '../BaseInput';

const MaskedInput = ({
  mask,
  handleChange,
  handleBlur,
  onBlur,
  value,
  showMask,
  ...props
}) => (
  <ReactTextMask
    mask={mask}
    onChange={handleChange}
    onBlur={onBlur ? handleBlur : undefined}
    value={value}
    showMask={showMask}
    render={(ref, inputProps) => (
      <Input
        ref={ref}
        {...props}
        {...inputProps}
      />
    )}
  />
);

export default MaskedInput;