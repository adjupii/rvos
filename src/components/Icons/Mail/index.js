import React from 'react';

import Icon from 'app/components/common/Icon';

const Mail = props => (
  <Icon
    viewBox="0 0 24 18"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
    >
      <rect
        width="23"
        height="17"
        x=".5"
        y=".5"
        stroke="#2979E1"
        rx="1"
      />
      <path
        fill="#2979E1"
        fillRule="nonzero"
        d="M23.338 0L24 .767 12.834 9.674c-.556.444-1.372.434-1.945-.024L0 .949.634.198l10.89 8.7c.19.153.462.157.648.009L23.338 0z"
      />
      <path
        fill="#2979E1"
        fillRule="nonzero"
        d="M22.754 17.56l.688-.727-9.713-9.196-.687.726zM9.513 7.78l.71.705-8.97 9.033-.71-.705z"
      />
    </g>
  </Icon>
);

export default Mail;