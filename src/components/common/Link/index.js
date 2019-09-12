import React from 'react';
import classNames from 'classnames';

import StyledLink from './styles';

const Link = ({
  noUnderline,
  disabled,
  className,
  ...props
}) => (
  <StyledLink
    className={
      classNames(
        'link',
        {
          'link--no-underline': noUnderline,
          'link--disabled': disabled
        },
        className
      )
    }
    {...props}
  />
);

Link.defaultProps = {
  color: 'link',
  as: 'a'
};

export default Link;