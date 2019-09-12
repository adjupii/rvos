import React from 'react';

import Icon from 'app/components/common/Icon';

const PlusInCircle = props => (
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
        d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0 1a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-8.5H15v1h-2.5V15h-1v-2.5H9v-1h2.5V9h1v2.5z"
        fill="#727683"
      />
    </g>
  </Icon>
);

export default PlusInCircle;