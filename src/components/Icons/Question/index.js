import React from 'react';

import Icon from 'app/components/common/Icon';

const Question = props => (
  <Icon
    viewBox="0 0 30 30"
    {...props}
  >
    <defs>
      <linearGradient
        x1="50%"
        y1="0%"
        x2="106.384%"
        y2="72.055%"
        id="payment-2_svg__a"
      >
        <stop
          stopColor="#521ACB"
          offset="0%"
        />
        <stop
          stopColor="#26B7F8"
          offset="100%"
        />
      </linearGradient>
    </defs>
    <path
      d="M1 29h14c7.735 0 14-6.265 14-14S22.735 1 15 1 1 7.265 1 15v14zm14 1H0V15C0 6.713 6.713 0 15 0c8.288 0 15 6.713 15 15 0 8.288-6.712 15-15 15zm-3-17c.093-1.728 1.36-3 3.538-3C17.573 10 19 11.337 19 13c0 1.207-.625 1.981-1.782 2.698-1.106.685-1.218 1.15-1.218 2.055v.611h-1v-.766c-.008-1.084.158-1.77 1.349-2.503C17.413 14.427 18 13.897 18 13c0-1.158-1.145-2-2.504-2-1.351 0-2.386.712-2.496 2h-1zm3.502 8a.485.485 0 0 1-.502-.498c0-.29.21-.502.502-.502.288 0 .498.213.498.502 0 .285-.21.498-.498.498z"
      fillRule="nonzero"
      fill="url(#payment-2_svg__a)"
    />
  </Icon>
);

export default Question;