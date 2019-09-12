import React from 'react';

import Icon from 'app/components/common/Icon';

const Prev = ({
  fill = '#454F65',
  ...props
}) => (
  <Icon
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <path d="M14.41 16.59L9.83 12l4.58-4.59L13 6l-6 6 6 6z" />
    <path d="M18 11H8.721l-.35 1 .35 1H18z" />
  </Icon>
);

export default Prev;