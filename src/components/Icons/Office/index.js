import React from 'react';

import Icon from 'app/components/common/Icon';

const Office = props => (
  <Icon
    viewBox="0 0 29 31"
    {...props}
  >
    <defs>
      <linearGradient
        x1="50%"
        y1="0%"
        x2="99.344%"
        y2="72.055%"
        id="payment-4_svg__a"
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
      d="M11 30h3V1H1v29h3v-7h7v7zm7 0v-7h7v7h3V6H15v24h3zM15 5h14v26H0V0h15v5zm4 19v6h5v-6h-5zM5 24v6h5v-6H5zm16-5v-3h-3v3h3zm1 0h3v-3h-3v3zm3 1h-8v-9h9v9h-1zm-4-5v-3h-3v3h3zm1 0h3v-3h-3v3zM7 19v-3H4v3h3zm1 0h3v-3H8v3zm3 1H3V7h9v13h-1zm-4-5v-3H4v3h3zm1 0h3v-3H8v3zm-1-4V8H4v3h3zm1 0h3V8H8v3z"
      fillRule="nonzero"
      fill="url(#payment-4_svg__a)"
    />
  </Icon>
);

export default Office;