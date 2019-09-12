import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

import Avatar from 'app/components/common/Avatar';
import Expander from 'app/components/common/Expander';
import Display from 'app/components/common/Display';
import defaultAvatar from 'app/images/avatar_header.svg';

const HeaderProfile = ({
  avatar,
  isOpen
}) => (
  <Styled className="header-profile">
    <Avatar
      avatar={avatar}
      defaultAvatar={defaultAvatar}
    />

    <Display className="d-none d-s-block">
      <Expander isExpanded={isOpen} />
    </Display>
  </Styled>
);

HeaderProfile.propTypes = {
  avatar: PropTypes.string,
  isOpen: PropTypes.bool
};

export default HeaderProfile;