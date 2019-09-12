import React from 'react';

import Styled from './styles';

const Close = props => (
  <Styled
    viewBox="0 0 24 24"
    className="c-close"
    {...props}
  >
    <g
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <polygon
        strokeOpacity="0.00784313771"
        stroke="#000000"
        strokeWidth="1.33333335e-11"
        points="0 0 23.9999985 0 23.9999985 23.9999985 0 23.9999985"
      />
      <g
        transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) translate(4.000000, 11.000000)"
        fill="#454F65"
      >
        <polygon points="16 -6.59999998e-07 0 -6.59999998e-07 0 1 0 1.99999922 16 1.99999922" />
      </g>
      <g
        transform="translate(12.000000, 12.000000) scale(-1, 1) rotate(45.000000) translate(-12.000000, -12.000000) translate(4.000000, 11.000000)"
        fill="#454F65"
      >
        <polygon points="16 -6.59999998e-07 0 -6.59999998e-07 0 1 0 1.99999922 16 1.99999922" />
      </g>
    </g>
  </Styled>
);

export default Close;