import React from 'react';

import Icon from 'app/components/common/Icon';

const ArrowRightCircle = props => (
  <Icon
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g stroke="#2979E1">
        <polyline
          strokeLinecap="round"
          points="11 8 15 12 11 16"
        />
        <circle
          cx="12"
          cy="12"
          r="9.5"
        />
      </g>
    </g>
  </Icon>
);

export default ArrowRightCircle;