import React from 'react';

import Icon from 'app/components/new/Icon';

const PoliciesNoData = props => (
  <Icon
    viewBox="0 0 110 110"
    {...props}
  >
    <defs>
      <circle
        id="apply_policy_form_svg__a"
        cx={55}
        cy={55}
        r={55}
      />
    </defs>

    <g
      fill="none"
      fillRule="evenodd"
    >
      <mask
        id="apply_policy_form_svg__b"
        fill="#fff"
      >
        <use xlinkHref="#apply_policy_form_svg__a" />
      </mask>

      <circle
        stroke="#454F65"
        cx={55}
        cy={55}
        r={54.5}
      />

      <path
        d="M55 109c29.823 0 54-24.177 54-54S84.823 1 55 1 1 25.177 1 55s24.177 54 54 54zm0 1C24.624 110 0 85.376 0 55S24.624 0 55 0s55 24.624 55 55-24.624 55-55 55z"
        fill="#454F65"
        fillRule="nonzero"
        mask="url(#apply_policy_form_svg__b)"
      />

      <g mask="url(#apply_policy_form_svg__b)">
        <g transform="translate(28 18)">
          <path
            d="M2 72V7h50V6H1v66h1zm0 1H0V5h53v2h2v54.957h-.106L42.277 75H2v-2zm52-12V8H3v66h38V61h13zm-.497.957H41.98V73.87l11.524-11.914z"
            fill="#454F65"
            fillRule="nonzero"
          />

          <path
            fillOpacity={0.15}
            fill="#454F65"
            d="M53 7.426H2.447V73H0V5h53z"
          />

          <rect
            fill="#454F65"
            x={22}
            y={26}
            width={25}
            height={1}
            rx={0.5}
          />

          <g transform="translate(8 22)">
            <g stroke="#454F65">
              <rect
                fill="#FFF"
                x={0.5}
                y={0.5}
                width={7}
                height={7}
                rx={1}
              />

              <path
                strokeLinejoin="round"
                d="M2 4l1.5 1.5L6 3"
              />
            </g>

            <path
              d="M14.5 16h18a.5.5 0 1 1 0 1h-18a.5.5 0 1 1 0-1z"
              fill="#454F65"
            />

            <g
              transform="translate(0 12)"
              stroke="#454F65"
            >
              <rect
                fill="#FFF"
                x={0.5}
                y={0.5}
                width={7}
                height={7}
                rx={1}
              />

              <path
                strokeLinejoin="round"
                d="M2 4l1.5 1.5L6 3"
              />
            </g>

            <rect
              fill="#454F65"
              x={14}
              y={28}
              width={14}
              height={1}
              rx={0.5}
            />

            <g
              transform="translate(0 24)"
              stroke="#454F65"
            >
              <rect
                fill="#FFF"
                x={0.5}
                y={0.5}
                width={7}
                height={7}
                rx={1}
              />

              <path
                strokeLinejoin="round"
                d="M2 4l1.5 1.5L6 3"
              />
            </g>
          </g>

          <path
            fillOpacity={0.15}
            fill="#454F65"
            d="M41 61.174L42 75h-3z"
          />

          <rect
            stroke="#454F65"
            fill="#BBD2F6"
            x={13.5}
            y={3.5}
            width={30}
            height={7}
            rx={1}
          />

          <g transform="translate(20)">
            <rect
              stroke="#454F65"
              fill="#BBD2F6"
              x={0.5}
              y={0.5}
              width={16}
              height={3}
              rx={1}
            />

            <rect
              fillOpacity={0.15}
              fill="#454F65"
              y={2}
              width={17}
              height={2}
              rx={1}
            />
          </g>

          <path
            fillOpacity={0.15}
            fill="#454F65"
            d="M13 8h31v2H13z"
          />
        </g>
      </g>
    </g>
  </Icon>
);

export default PoliciesNoData;