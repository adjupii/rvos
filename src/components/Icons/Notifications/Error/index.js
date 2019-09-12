import React from 'react';

import Icon from 'app/components/common/Icon';

const Error = props => (
  <Icon
    viewBox="0 0 32 32"
    {...props}
  >
    <g
      stroke="#fff"
      fill="none"
      fillRule="evenodd"
    >
      <circle
        cx={16}
        cy={16}
        r={15.5}
      />
      <path d="M11.89 19.667l-3.536 3.536h.707l-.707-.707v.707l3.535-3.536zm0 0l3.888-3.889-7.424-7.424v.707l.707-.707h-.707l7.424 7.424 3.89-3.889-3.89 3.89 7.425 7.424v-.707l-.707.707h.707l-7.425-7.425-3.889 3.89zm7.777-7.778l3.536-3.535h-.707l.707.707v-.707l-3.536 3.535z" />
    </g>
  </Icon>
);

export default Error;