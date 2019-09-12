import React from 'react';

import Icon from 'app/components/new/Icon';

const Calendar = props => (
  <Icon
    viewBox="0 0 16 16"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
    >
      <path d="M0 0h16v16H0z" />

      <path
        d="M13 5H3v8h10V5zM3 4h10V3H3v1zm11 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2zm-5 6H7v1H6v-1H4v-1h2V8H4V7h2V6h1v1h2V6h1v1h2v1h-2v2h2v1h-2v1H9v-1zm0-1V8H7v2h2z"
        fill="#727683"
        fillRule="nonzero"
      />
    </g>
  </Icon>
);

export default Calendar;