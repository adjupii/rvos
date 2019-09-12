import React from 'react';

import Icon from 'app/components/common/Icon';

const HouseLocation = props => (
  <Icon
    viewBox="0 0 48 48"
    {...props}
  >
    <g
      transform="translate(4 3)"
      fill="none"
      fillRule="evenodd"
    >
      <path
        d="M35 39h1l-1 1v-1zm0 0V16h1v24H4V16h1v23h30zM5 39v1l-1-1h1zm0 1l-1-1h1v1zm0-1h30V16h1v24H4V16h1v23zm30 0h1l-1 1v-1z"
        fill="#5D6577"
        fillRule="nonzero"
      />

      <path
        d="M20.128 1.695L1.68 19.36a.5.5 0 1 1-.691-.722l18.797-18a.5.5 0 0 1 .694.002l18.536 18a.5.5 0 1 1-.697.718L20.128 1.695z"
        fill="#5D6577"
        fillRule="nonzero"
      />

      <path
        d="M29.5 10.03l6 5.207V6.006a.5.5 0 0 0-.503-.506h-4.994a.495.495 0 0 0-.503.501v4.03z"
        stroke="#5D6577"
      />

      <circle
        stroke="#5D6577"
        cx={20}
        cy={22.333}
        r={2.833}
      />

      <path
        d="M20 33.833c2.318 0 7.5-7.521 7.5-11.5a7.5 7.5 0 0 0-15 0c0 3.979 5.182 11.5 7.5 11.5z"
        stroke="#5D6577"
      />
    </g>
  </Icon>
);

export default HouseLocation;