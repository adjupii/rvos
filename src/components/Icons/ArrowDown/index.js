import React from 'react';

import Styled from './styles';

const ArrowDown = props => (
  <Styled
    viewBox="0 0 12 8"
    className="c-arrow-down"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
    >
      <path d="M-6-8h24v24H-6z" />

      <path
        d="M1.41 0L6 4.945 10.59 0 12 1.522 6 8 0 1.522z"
        className="c-arrow-down__path"
      />
    </g>
  </Styled>
);

export default ArrowDown;