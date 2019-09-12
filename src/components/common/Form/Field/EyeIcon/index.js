import React from 'react';

import Visible from 'app/components/Icons/Visible';
import Invisible from 'app/components/Icons/Invisible';

const Icons = {
  Visible,
  Invisible
};

const EyeIcon = ({
  iconName,
  ...props
}) => {
  const Icon = Icons[iconName];

  return (
    <Icon
      width="24"
      height="24"
      {...props}
    />
  );
};

export default EyeIcon;