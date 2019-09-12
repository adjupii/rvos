import React from 'react';

import Icon from 'app/components/new/Icon';

const Lock = props => (
  <Icon
    viewBox="0 0 16 19"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
    >
      <path d="M-4-3h24v24H-4z" />
      <path
        d="M8 15c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0-1c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm6-7h-1V5c0-2.76-2.24-5-5-5S3 2.24 3 5v2H2C.9 7 0 7.9 0 9v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM4 4.647C4 2.635 5.794 1 8 1s4 1.635 4 3.647V7H4V4.647zM14 18H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z"
        fill="#F04242"
      />
    </g>
  </Icon>
);

export default Lock;