import React from 'react';

import Icon from 'app/components/new/Icon';

const BillingNoData = props => (
  <Icon
    viewBox="0 0 110 110"
    {...props}
  >
    <defs>
      <circle
        id="no-billing_svg__a"
        cx={55}
        cy={55}
        r={55}
      />

      <circle
        id="no-billing_svg__c"
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
        id="no-billing_svg__b"
        fill="#fff"
      >
        <use xlinkHref="#no-billing_svg__a" />
      </mask>

      <circle
        stroke="#454F65"
        cx={55}
        cy={55}
        r={54.5}
      />

      <path
        d="M82 80.714v2L73.764 87l-6.321-4.286L61.24 87l-6.208-4.286L48.903 87l-6.255-4.286L36.415 87 28 82.714v-2L36.415 85l6.233-4.286L48.903 85l6.13-4.286L61.24 85l6.202-4.286L73.763 85 82 80.714z"
        fillOpacity={0.15}
        fill="#454F65"
        mask="url(#no-billing_svg__b)"
      />

      <path
        d="M28.5 22h53a5.5 5.5 0 0 1 0 11v-5l-52.846 1v4H28.5a5.5 5.5 0 0 1 0-11z"
        fill="#BBD2F6"
        mask="url(#no-billing_svg__b)"
      />

      <mask
        id="no-billing_svg__d"
        fill="#fff"
      >
        <use xlinkHref="#no-billing_svg__c" />
      </mask>

      <circle
        stroke="#454F65"
        cx={55}
        cy={55}
        r={54.5}
      />

      <path
        d="M28 28v4c-.801.125-1.45.021-1.949-.312-.497-.334-.99-.79-1.476-1.367L28 28z"
        fillOpacity={0.15}
        fill="#454F65"
        mask="url(#no-billing_svg__d)"
      />

      <path
        d="M82 31.982c2.334-.192 4-1.947 4-4.315V27.5c0-2.604-1.949-4.5-4.6-4.5H28.6c-2.651 0-4.6 1.896-4.6 4.5v.156c0 2.37 1.665 4.129 4 4.326V28h54v3.982zm0 1.002v50.73L73.764 88l-6.321-4.286L61.24 88l-6.208-4.286L48.903 88l-6.255-4.286L36.415 88 28 83.714V32.983c-2.799-.221-5-2.522-5-5.327V27.5c0-3.038 2.507-5.5 5.6-5.5h52.8c3.093 0 5.6 2.462 5.6 5.5v.167c0 2.803-2.202 5.101-5 5.317zM29 29v54.106l7.5 3.833 6.244-4.307 6.202 4.263 6.084-4.267 6.162 4.268 6.149-4.263 6.328 4.304L81 83.111V29H29zm27.5 20h17a.5.5 0 1 1 0 1h-17a.5.5 0 1 1 0-1zm0 9h17a.5.5 0 1 1 0 1h-17a.5.5 0 1 1 0-1zm0 9h17a.5.5 0 1 1 0 1h-17a.5.5 0 1 1 0-1zm-10.372-.863c-1.005.91-2.92 1.434-4.532 1.573v2.834h-1v-2.808c-1.196-.035-1.8-.273-2.84-.715A8.642 8.642 0 0 1 35 65.162l.546-.936c.884.797 1.764 1.391 2.639 1.781.875.39 1.354.611 2.411.663v-7.696c-2.555-.424-3.88-1.781-4.4-2.431-.52-.65-.78-1.512-.78-2.587 0-.953.238-1.811.715-2.574.477-.763 2.015-2.548 4.465-2.574V46h1v2.834c1.04.087 3.615.396 5.936 2.47l-.546.91c-1.283-1.387-3.5-2.158-5.39-2.314v8.216c3.876.858 4.827 1.651 5.312 2.249.485.598.728 1.382.728 2.353 0 1.37-.503 2.509-1.508 3.419zm-8.996-10.244c1.072 1.253 2.51 1.694 3.464 1.937v-7.956c-1.421.087-2.047.49-2.853 1.209-.806.72-1.209 1.686-1.209 2.899 0 .78.2 1.417.598 1.911zm8.229 9.555c.754-.693 1.131-1.612 1.131-2.756 0-.97-.364-1.699-1.092-2.184-.728-.485-2.417-.901-3.804-1.248v7.384c1.335-.104 3.011-.503 3.765-1.196zM33 36h4v1h-4v-1zm8 0h4v1h-4v-1zm8 0h4v1h-4v-1zm8 0h4v1h-4v-1zm8 0h4v1h-4v-1zm8 0h4v1h-4v-1z"
        fill="#454F65"
        fillRule="nonzero"
        mask="url(#no-billing_svg__d)"
      />
    </g>
  </Icon>
);

export default BillingNoData;