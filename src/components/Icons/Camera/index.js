import React from 'react';

import Icon from 'app/components/new/Icon';

const Camera = props => (
  <Icon
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke="#fff"
    >
      <path d="M7.707 3.878L7.046 6.5H3a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h18a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5h-4.046l-.66-2.622a.5.5 0 0 0-.486-.378H8.191a.5.5 0 0 0-.484.378z" />
      <circle
        cx="12"
        cy="13"
        r="4.5"
      />
    </g>
  </Icon>
);

export default Camera;