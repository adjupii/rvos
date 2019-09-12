import React from 'react';

import Icon from 'app/components/common/Icon';

const Success = props => (
  <Icon
    viewBox="0 0 32 32"
    {...props}
  >
    <g
      stroke="#FFF"
      fill="none"
      fillRule="evenodd"
    >
      <path d="M10.536 17.778l3.535 3.536 10.96-10.96h-.707l.707.707v-.707l-10.96 10.96-3.535-3.536zm3.535 3.536l-.353.353h.707l-.354-.353zm-3.535-3.536l-3.182-3.182v.707l.707-.707h-.707l3.182 3.182z" />
      <circle
        cx={16}
        cy={16}
        r={15.5}
      />
    </g>
  </Icon>
);

export default Success;