import React from 'react';

import Icon from 'app/components/common/Icon';

const Letter = props => (
  <Icon
    viewBox="0 0 110 110"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
    >
      <circle
        cx="55"
        cy="55"
        r="49.5"
        fill="#FFF"
        stroke="#6F6F6F"
      />
      <circle
        cx="55"
        cy="55"
        r="54.5"
        stroke="#2979E1"
        strokeOpacity=".15"
      />
      <g stroke="#454F65">
        <path
          fill="#2979E1"
          fillOpacity=".07"
          d="M25.897 51.941l7.18 7.58 50.686-27.47.075-.12-57.941 20.01zM38.626 65.128l15.676 15.64 28.996-47.921-44.672 32.28zM38.416 65.026v6.858l4.15-2.624"
        />
        <path d="M33.037 59.348l5.419 12.91" />
      </g>
    </g>
  </Icon>
);

export default Letter;