import React from 'react';

import Icon from 'app/components/common/Icon';

const Sandglass = props => (
  <Icon
    viewBox="0 0 110 110"
    {...props}
  >
    <defs>
      <circle
        id="send_clock_svg__a"
        cx={55}
        cy={55}
        r={55}
      />
      <circle
        id="send_clock_svg__b"
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
        id="send_clock_svg__c"
        fill="#fff"
      >
        <use xlinkHref="#send_clock_svg__b" />
      </mask>
      <circle stroke="#454F65"
        cx={55}
        cy={55}
        r={54.5}
      />
      <g mask="url(#send_clock_svg__c)">
        <g transform="translate(35 19)">
          <path
            d="M5 24.226V22c7.333 2.529 14.546 1.862 21.637-2C30.212 18.667 33 19.333 35 22v2.102a12 12 0 0 1-9.717 11.78c-1.215.328-2.103.587-2.664.779-1.004.343-2.184.493-2.619 1.339-2.357-1.249-4.167-1.923-5.429-2.022A12 12 0 0 1 5 24.226z"
            fill="#BBD2F6"
            fillRule="nonzero"
          />
          <path
            d="M35.5 4.5h-31V24a12.505 12.505 0 0 0 9.055 12.02l1.68.48-1.68.48A12.505 12.505 0 0 0 4.5 49v19.5h31V49a12.505 12.505 0 0 0-9.055-12.02l-1.68-.48 1.68-.48A12.505 12.505 0 0 0 35.5 24V4.5z"
            stroke="#454F65"
          />
          <rect
            stroke="#454F65"
            x={0.5}
            y={0.5}
            width={39}
            height={4}
            rx={2}
          />
          <path
            d="M33 1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5c.571-.24.857-.738.857-1.492 0-.77-.286-1.273-.857-1.508z"
            fill="#E3E5E8"
          />
          <path
            d="M13.99 56.659A48.57 48.57 0 0 0 19.515 55c2.333 1.653 4.77 2.713 7.308 3.18A9.984 9.984 0 0 1 35 68H5a11.649 11.649 0 0 1 8.99-11.341z"
            fill="#BBD2F6"
            fillRule="nonzero"
          />
          <rect
            stroke="#454F65"
            x={0.5}
            y={68.5}
            width={39}
            height={4}
            rx={2}
          />
          <path
            d="M33 69h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5c.571-.24.857-.738.857-1.492 0-.77-.286-1.273-.857-1.508z"
            fill="#E3E5E8"
          />
          <path
            d="M25.962 20.436C26.608 26.146 24.62 31.333 20 36c.31.313.843.475 1.524.51C25.19 36.695 33.157 33.211 34 30c.667-2.54 1-5.206 1-8-1.246-1.602-2.66-2.475-4.245-2.618-1.837-.131-3.434.22-4.793 1.054zM19.532 55c-1.625 2.41 6.468 7 6.244 14a48.632 48.632 0 0 1 9.85 0c-.82-4.078-2.168-6.95-4.043-8.615C28.771 57.887 23.54 58.42 19.532 55z"
            fillOpacity={0.15}
            fill="#454F65"
          />
        </g>
      </g>
    </g>
  </Icon>
);

export default Sandglass;