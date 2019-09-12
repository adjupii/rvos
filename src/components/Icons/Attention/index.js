import React from 'react';

import Icon from 'app/components/new/Icon';

const Attention = props => (
  <Icon
    viewBox="0 0 24 25"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
    >
      <path
        d="M12.894 1.789l10.382 20.764A1 1 0 0122.382 24H1.618a1 1 0 01-.894-1.447L11.106 1.789a1 1 0 011.788 0z"
        stroke="#F04242"
      />

      <path
        d="M13 11v6h-2v-6h2zm0 7v2h-2v-2h2z"
        fill="#F04242"
      />
    </g>
  </Icon>
);

export default Attention;