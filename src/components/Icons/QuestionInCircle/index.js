import React from 'react';

import Icon from 'app/components/new/Icon';

const QuestionInCircle = props => (
  <Icon
    viewBox="0 0 14 14"
    {...props}
  >
    <defs>
      <linearGradient
        x1="50%"
        y1="0%"
        x2="106.384%"
        y2="72.055%"
        id="question-in-circle-gradient"
      >
        <stop
          stopColor="#521ACB"
          offset="0%"
        />

        <stop
          stopColor="#26B7F8"
          offset="100%"
        />
      </linearGradient>
    </defs>

    <path
      d="M8 1c3.864 0 7 3.136 7 7s-3.136 7-7 7-7-3.136-7-7 3.136-7 7-7zm0 13c3.307 0 6-2.693 6-6s-2.693-6-6-6-6 2.693-6 6 2.693 6 6 6zm-.5-2v-1h1v1h-1zM8 4c1.381 0 2.5 1.027 2.5 2.5 0 1.667-2 2-2 3.5h-.992c0-2.167 1.992-2.167 1.992-3.5 0-.733-.48-1.488-1.5-1.488s-1.471.921-1.471 1.655H5.5C5.5 5.193 6.619 4 8 4z"
      transform="translate(-1 -1)"
      fill="url(#question-in-circle-gradient)"
      fillRule="evenodd"
    />
  </Icon>
);

export default QuestionInCircle;