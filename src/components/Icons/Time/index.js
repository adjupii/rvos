import React from 'react';

import Icon from 'app/components/common/Icon';

const Time = props => (
  <Icon
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
    >
      <path d="M0 0h24v24H0z" />
      <path
        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 21c-4.973 0-9-4.027-9-9s4.027-9 9-9 9 4.027 9 9-4.027 9-9 9zm.063-14H11v6l5.25 3.15.575-.847-4.762-2.838V7z"
        fill="#727683"
      />
    </g>
  </Icon>
);

export default Time;