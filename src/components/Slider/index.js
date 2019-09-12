import React from 'react';

import Styled from './styles';

export const Slider = ({
  registerSlider,
  ...props
}) => (
  <Styled
    ref={registerSlider}
    {...props}
  />
);

Slider.defaultProps = {
  arrows: false
};

export default Slider;