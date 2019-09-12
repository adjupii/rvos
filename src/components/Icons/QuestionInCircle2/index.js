import React from 'react';

import Icon from 'app/components/new/Icon';

const QuestionInCircle2 = props => (
  <Icon
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
    >
      <circle
        stroke="#5D6577"
        cx={12.5}
        cy={12.5}
        r={9}
      />

      <path
        d="M12 15c.004-.544-.03-1.92.068-2.13.097-.21.217-.488.63-.833.4-.438.797-.776.967-1.012.17-.236.254-.52.254-.854 0-.398-.114-.703-.342-.917-.229-.214-.668-.32-1.092-.32-.368 0-.68.092-.94.278-.258.185-.387.458-.387.818h-.975c-.012-.604.217-1.12.688-1.485.47-.363.887-.545 1.614-.545.796 0 1.31.188 1.75.565.44.377.717.903.717 1.577 0 .484-.094.926-.38 1.328a7.58 7.58 0 01-1.13 1.231c-.218.202-.35.281-.396.442-.047.161-.07 1.516-.07 1.857H12zm1 2h-1v-1h1v1z"
        fill="#5D6577"
        fillRule="nonzero"
      />
    </g>
  </Icon>
);

export default QuestionInCircle2;