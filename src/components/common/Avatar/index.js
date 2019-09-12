import React from 'react';
import classNames from 'classnames';

import Styled from './styles';

import Image from 'app/components/new/Image';
import AvatarImg from 'app/images/avatar.svg';

const Avatar = ({
  avatar,
  defaultAvatar,
  ...props
}) => {
  const src = avatar || defaultAvatar;

  return (
    <Styled
      className={
        classNames(
          'avatar',
          { 'avatar--no-default': avatar }
        )
      }
      {...props}
    >
      <Image src={src} />
    </Styled>
  );
};

Avatar.defaultProps = {
  width: '34px',
  height: '34px',
  defaultAvatar: AvatarImg
};

export default Avatar;