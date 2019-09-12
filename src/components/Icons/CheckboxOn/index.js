import React from 'react';

import Icon from 'app/components/new/Icon';

const CheckboxOn = props => (
  <Icon
    viewBox="0 0 16 16"
    {...props}
  >
    <defs>
      <linearGradient
        x1="-18.6705734%"
        y1="50%"
        x2="129.888141%"
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

      <linearGradient
        x1="-15.7690363%"
        y1="50%"
        x2="100%"
        y2="50%"
        id="linearGradient-2"
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
        fill="url(#linearGradient-1)"
        x="3"
        y="3"
        width="10"
        height="10"
        rx="1"
      />
      <rect
        stroke="url(#linearGradient-2)"
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        rx="4"
      />
    </g>
  </Icon>
);

export default CheckboxOn;