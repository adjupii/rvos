import React from 'react';

import Icon from 'app/components/new/Icon';

const Upload = props => (
  <Icon
    viewBox="0 0 16 16"
    {...props}
  >
    <g
      transform="translate(-4 -4)"
      fill="#457DFF"
      fillRule="evenodd"
    >
      <rect
        x={4}
        y={19}
        width={16}
        height={1}
        rx={0.5}
      />

      <path d="M12.5 5.896l3.39 3.39a.5.5 0 0 0 .706-.708l-3.712-3.712a1.25 1.25 0 0 0-1.768 0L7.404 8.578a.5.5 0 0 0 .707.708l3.389-3.39v11.279a.5.5 0 1 0 1 0V5.896z" />
    </g>
  </Icon>
);

export default Upload;