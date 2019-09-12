import React from 'react';

import Icon from 'app/components/new/Icon';

const CheckboxOff = props => (
  <Icon
    viewBox="0 0 16 16"
    {...props}
  >
    <g
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <rect
        stroke="#727683"
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        rx="4"
      />
    </g>
  </Icon>
);

export default CheckboxOff;