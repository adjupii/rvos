import React from 'react';

import Icon from 'app/components/new/Icon';

const CreditCard = props => (
  <Icon
    viewBox="0 0 330 98"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
    >
      <path
        d="M7.692.5c-2.363 0-3.358.192-4.387.742a4.952 4.952 0 0 0-2.063 2.063C.692 4.335.5 5.33.5 7.692v82.616c0 2.363.192 3.358.742 4.387a4.952 4.952 0 0 0 2.063 2.063c1.03.55 2.024.742 4.387.742h134.616c2.363 0 3.358-.192 4.387-.742a4.952 4.952 0 0 0 2.063-2.063c.55-1.03.742-2.024.742-4.387V7.692c0-2.363-.192-3.358-.742-4.387a4.952 4.952 0 0 0-2.063-2.063C145.665.692 144.67.5 142.308.5H7.692z"
        stroke="#5D6577"
      />
      <text
        fontFamily="Poppins-Medium, Poppins"
        fontSize={14}
        fontWeight={400}
        letterSpacing={1.4}
        fill="#5D6577"
      >
        <tspan
          x={16}
          y={44}
        >
          1111 1111 1111 1111
        </tspan>
      </text>
      <g fill="#5D6577">
        <text
          fontFamily="Muli-Bold, Muli"
          fontSize={12}
          fontWeight="bold"
          transform="translate(16 54)"
        >
          <tspan
            x={84}
            y={23}
          >
            00/00
          </tspan>
        </text>
        <text
          fontFamily="Muli-Bold, Muli"
          fontSize={12}
          fontWeight="bold"
          transform="translate(16 54)"
        >
          <tspan
            x={0}
            y={23}
          >
            John Doe
          </tspan>
        </text>
        <text
          fontFamily="Poppins-Regular, Poppins"
          fontSize={8}
          transform="translate(16 54)"
        >
          <tspan
            x={86}
            y={9}
          >
            Ex. date
          </tspan>
        </text>
      </g>
      <g>
        <path
          d="M187.692.5c-2.363 0-3.358.192-4.387.742a4.952 4.952 0 0 0-2.063 2.063c-.55 1.03-.742 2.024-.742 4.387v82.616c0 2.363.192 3.358.742 4.387a4.952 4.952 0 0 0 2.063 2.063c1.03.55 2.024.742 4.387.742h134.616c2.363 0 3.358-.192 4.387-.742a4.952 4.952 0 0 0 2.063-2.063c.55-1.03.742-2.024.742-4.387V7.692c0-2.363-.192-3.358-.742-4.387a4.952 4.952 0 0 0-2.063-2.063C325.665.692 324.67.5 322.308.5H187.692z"
          stroke="#5D6577"
        />
        <path
          stroke="#5D6577"
          d="M180.5 19.5h149v14h-149z"
        />
        <g fill="#5D6577">
          <text
            fontFamily="Muli-Bold, Muli"
            fontSize={12}
            fontWeight="bold"
            transform="translate(196 54)"
          >
            <tspan
              x={0}
              y={23}
            >
              000
            </tspan>
          </text>
          <text
            fontFamily="Poppins-Regular, Poppins"
            fontSize={8}
            transform="translate(196 54)"
          >
            <tspan
              x={0}
              y={9}
            >
              CCV-number
            </tspan>
          </text>
        </g>
      </g>
    </g>
  </Icon>
);

export default CreditCard;