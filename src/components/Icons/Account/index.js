import React from 'react';

import Icon from 'app/components/common/Icon';

const Account = props => (
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
      <g transform="translate(1.000000, 3.000000)">
        <rect
          stroke="#454F65"
          x="0.5"
          y="2.5"
          width="21"
          height="16"
          rx="1"
        />

        <rect
          stroke="#454F65"
          x="8.5"
          y="6.5"
          width="5"
          height="5"
          rx="2.5"
        />

        <rect
          fill="#454F65"
          x="6"
          y="14"
          width="10"
          height="1"
        />

        <path
          d="M9.5,0.5 C8.94771525,0.5 8.5,0.94771525 8.5,1.5 L8.5,2 C8.5,2.27614237 8.72385763,2.5 9,2.5 L13,2.5 C13.2761424,2.5 13.5,2.27614237 13.5,2 L13.5,1.5 C13.5,0.94771525 13.0522847,0.5 12.5,0.5 L9.5,0.5 Z"
          stroke="#454F65"
        />
      </g>
    </g>
  </Icon>
);

export default Account;