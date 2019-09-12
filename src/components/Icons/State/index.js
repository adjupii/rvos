import React from 'react';

import Icon from 'app/components/new/Icon';

const State = props => (
  <Icon
    viewBox="0 0 16 16"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
    >
      <path d="M0 0h16v16H0z" />

      <g
        fill="#727683"
        fillRule="nonzero"
      >
        <path d="M8 13c.883 0 4-4.02 4-6a4 4 0 1 0-8 0c0 1.98 3.117 6 4 6zm0 1c-1.285 0-5-4.239-5-7a5 5 0 1 1 10 0c0 2.761-3.715 7-5 7z" />
        <path d="M8 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
      </g>
    </g>
  </Icon>
);

export default State;