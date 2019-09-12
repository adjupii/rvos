import React from 'react';

import Icon from 'app/components/new/Icon';

const RadioOn = props => (
  <Icon
    viewBox="0 0 16 16"
    {...props}
  >
    <defs>
      <linearGradient
        x1="-47.8181452%"
        y1="50%"
        x2="153.029025%"
        y2="50%"
        id="linearGradient-1"
      >
        <stop
          stopColor="#5317CA"
          offset="0%"
        />
        <stop
          stopColor="#26B7F8"
          offset="100%"
        />
      </linearGradient>
    </defs>
    <g
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <rect
        stroke="#19233E"
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        rx="7.5"
      />
      <rect
        fill="url(#linearGradient-1)"
        x="4"
        y="4"
        width="8"
        height="8"
        rx="4"
      />
    </g>
  </Icon>
);

export default RadioOn;