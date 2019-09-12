import React, { useRef, useEffect } from 'react';
import classNames from 'classnames';

import Styled from './styles';

const Dropdown = ({
  className,
  ...props
}) => {
  const ref = useRef(null);

  useEffect(
    () => {
      ref.current.focus();
    },
    []
  );

  return (
    <Styled
      ref={ref}
      tabIndex="-1"
      className={
        classNames(
          'c-dropdown',
          className
        )
      }
      {...props}
    />
  );
};

export default Dropdown;