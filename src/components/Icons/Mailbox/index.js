import React from 'react';

import Icon from 'app/components/common/Icon';

const Mailbox = props => (
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
        id="payment-5_svg__a"
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
      d="M21 8V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6v1a7 7 0 0 1 7 7v12H21v4H11v-4H1V15a7 7 0 0 1 7-7h13zm1-6v13h1V9h-.006V8H23V6h7V2h-8zm-1 7h-8.392A6.996 6.996 0 0 1 16 15v11h14V15a6 6 0 0 0-6-6v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9zm-1 18h-8v3h8v-3zm-5-1V15a6 6 0 0 0-6-6H8a6 6 0 0 0-6 6v11h13z"
      transform="translate(-1 -1)"
      fill="url(#payment-5_svg__a)"
      fillRule="nonzero"
    />
  </Icon>
);

export default Mailbox;