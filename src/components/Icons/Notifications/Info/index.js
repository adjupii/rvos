import React from 'react';

import Icon from 'app/components/common/Icon';

const Info = props => (
  <Icon
    viewBox="0 0 32 32"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
    >
      <circle
        stroke="#FFF"
        cx={16}
        cy={16}
        r={15.5}
      />
      <g fill="#FFF">
        <path d="M15 12h2v12h-2zM15 8h2v2h-2z" />
      </g>
    </g>
  </Icon>
);

export default Info;