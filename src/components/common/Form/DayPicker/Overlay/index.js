import React from 'react';
import classNames from 'classnames';

import Styled from './styles';

const Overlay = ({
  classNames: {
    overlayWrapper,
    overlay
  },
  children,
  ...props
}) => (
  <Styled
    className={overlayWrapper}
    {...props}
  >
    <div
      className={
        classNames(
          overlay,
          'c-daypicker-overlay'
        )
      }
    >
      {children}
    </div>
  </Styled>
);

export default Overlay;