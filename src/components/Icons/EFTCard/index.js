import React from 'react';

import Icon from 'app/components/new/Icon';

const EFTCard = props => (
  <Icon
    viewBox="0 0 320 146"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
    >
      <path
        d="M7.692.5c-2.363 0-3.358.192-4.387.742a4.952 4.952 0 0 0-2.063 2.063C.692 4.335.5 5.33.5 7.692v130.616c0 2.363.192 3.358.742 4.387a4.952 4.952 0 0 0 2.063 2.063c1.03.55 2.024.742 4.387.742h304.616c2.363 0 3.358-.192 4.387-.742a4.952 4.952 0 0 0 2.063-2.063c.55-1.03.742-2.024.742-4.387V7.692c0-2.363-.192-3.358-.742-4.387a4.952 4.952 0 0 0-2.063-2.063C315.665.692 314.67.5 312.308.5H7.692z"
        stroke="#5D6577"
      />
      <text
        fontFamily="Muli-SemiBold, Muli"
        fontSize={8}
        fontWeight={500}
        fill="#5F6579"
        transform="translate(16 12)"
      >
        <tspan
          x={0}
          y={8}
        >
          John Doe
        </tspan>
        <tspan
          x={0}
          y={18}
        >
          676 main Street
        </tspan>
        <tspan
          x={0}
          y={28}
        >
          Anywhere, Ml 12345
        </tspan>
        <tspan
          x={0}
          y={38}
        >
          Ph. 888-422-6122
        </tspan>
      </text>
      <text
        fontFamily="Muli-SemiBold, Muli"
        fontSize={8}
        fontWeight={500}
        fill="#60657A"
        transform="translate(16 12)"
      >
        <tspan
          x={268.8}
          y={8}
        >
          1001
        </tspan>
        <tspan
          x={248.544}
          y={18}
        >
          1-23/5678
        </tspan>
      </text>
      <text
        fontFamily="Muli-SemiBold, Muli"
        fontSize={8}
        fontWeight={500}
        fill="#5D6577"
        transform="translate(16 12)"
      >
        <tspan
          x={210}
          y={18}
        />
        <tspan
          x={210}
          y={38}
        >
          DATE
        </tspan>
      </text>
      <path
        fill="#5D6577"
        d="M252 49h52v1h-52z"
      />
      <g>
        <text
          fontFamily="Muli-SemiBold, Muli"
          fontSize={8}
          fontWeight={500}
          fill="#5E6578"
          transform="translate(16 67)"
        >
          <tspan
            x={0}
            y={10}
          >
            PAY TO THE ORDER OF
          </tspan>
        </text>
        <text
          fontFamily="Muli-Bold, Muli"
          fontSize={12}
          fontWeight="bold"
          fill="#5D6577"
          transform="translate(16 67)"
        >
          <tspan
            x={225}
            y={12}
          >
            $
          </tspan>
        </text>
        <path
          fill="#5D6577"
          d="M110 76h117v1H110zM252 76h52v1h-52z"
        />
      </g>
      <text
        fontFamily="Muli-Bold, Muli"
        fontSize={8}
        fontWeight="bold"
        fill="#60657A"
      >
        <tspan
          x={16}
          y={89}
        >
          Your Financial Institution
        </tspan>
        <tspan
          x={16}
          y={99}
          fontFamily="Muli-SemiBold, Muli"
          fontWeight={500}
        >
          123 Main Street
        </tspan>
        <tspan
          x={16}
          y={109}
          fontFamily="Muli-SemiBold, Muli"
          fontWeight={500}
        >
          Chicago IL 60066
        </tspan>
      </text>
      <g>
        <text
          fontFamily="Muli-Bold, Muli"
          fontSize={10}
          fontWeight="bold"
          fill="#5D6577"
          transform="translate(13 122)"
        >
          <tspan
            x={3}
            y={10}
          >
            9999999999
          </tspan>
        </text>
        <path
          stroke="#83B4F3"
          d="M78.5 128v5.5h-65V128"
        />
        <path
          strokeOpacity={0.7}
          stroke="#3ACA74"
          d="M160.5 128v5.5h-76V128"
        />
        <text
          fontFamily="Muli-Bold, Muli"
          fontSize={10}
          fontWeight="bold"
          fill="#5D6577"
          transform="translate(13 122)"
        >
          <tspan
            x={73}
            y={10}
          >
            000000000000
          </tspan>
        </text>
        <text
          fontFamily="Muli-Bold, Muli"
          fontSize={10}
          fontWeight="bold"
          fill="#5D6577"
          transform="translate(13 122)"
        >
          <tspan
            x={155}
            y={10}
          >
            0000
          </tspan>
        </text>
      </g>
    </g>
  </Icon>
);

export default EFTCard;