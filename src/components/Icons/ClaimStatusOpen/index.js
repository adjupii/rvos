import React from 'react';

import Icon from 'app/components/common/Icon';

const ClaimStatusOpen = props => (
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
      <rect
        x="0"
        y="0"
        width="24"
        height="24"
      />
      <g
        transform="translate(6.000000, 3.000000)"
        fill="#FFFFFF"
      >
        <path d="M2,1 L10,1 L10,5 C10,7.209139 8.209139,9 6,9 L6,9 C3.790861,9 2,7.209139 2,5 L2,1 Z" />
        <rect
          x="0"
          y="0"
          width="12"
          height="2"
        />
        <rect
          x="0"
          y="16"
          width="12"
          height="2"
        />
        <rect
          x="5"
          y="8"
          width="2"
          height="2"
        />
        <path d="M2,17 L10,17 L10,12.2 C10,10.4326888 8.209139,9 6,9 C3.790861,9 2,10.4326888 2,12.2 L2,17 Z" />
      </g>
    </g>
  </Icon>
);

export default ClaimStatusOpen;