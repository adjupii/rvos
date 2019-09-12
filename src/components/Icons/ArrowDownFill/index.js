import React from 'react';

import Styled from './styles';

const ArrowDownFill = props => (
  <Styled
    viewBox="0 0 24 24"
    className="c-arrow-down-fill"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
    >
      <path d="M0 0h24v24H0z" />

      <path
        d="M7 10l5 5 5-5z"
        className="c-arrow-down-fill__path"
      />
    </g>
  </Styled>
);

export default ArrowDownFill;