import React from 'react';

import RadioOff from 'app/components/Icons/RadioOff';
import RadioOn from 'app/components/Icons/RadioOn';
import CheckboxOff from 'app/components/Icons/CheckboxOff';
import CheckboxOn from 'app/components/Icons/CheckboxOn';

const Icons = {
  checkbox: {
    off: CheckboxOff,
    on: CheckboxOn
  },
  radio: {
    off: RadioOff,
    on: RadioOn
  }
};

const Icon = ({
  type,
  selected,
  ...props
}) => {
  const
    iconName = selected ? 'on' : 'off',

    Icon = Icons[type][iconName];

  return (
    <Icon
      width="16"
      height="16"
      {...props}
    />
  );
};

export default Icon;