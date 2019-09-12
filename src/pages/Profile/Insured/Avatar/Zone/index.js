import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Styled from './styles';

import Avatar from 'app/components/common/Avatar';
import Loader from 'app/components/Icons/Loader';
import Camera from 'app/components/Icons/Camera';

const Zone = ({
  avatar,
  isLoading,
  isDragActive,
  width,
  height
}) => (
  <Styled
    width={width}
    height={height}
    className={
      classNames(
        'upload-avatar',
        {
          'upload-avatar--is-loading': isLoading,
          'upload-avatar--is-drag-active': isDragActive
        }
      )
    }
  >
    {
      isLoading
        ? (
          <Loader
            width={width}
            height={height}
          />
        )
        : (
          <Avatar
            avatar={avatar}
            width={width}
            height={height}
          />
        )
    }

    <div className="upload-avatar__mask">
      <Camera
        width="24"
        height="24"
      />
    </div>
  </Styled>
);

Zone.propTypes = {
  avatar: PropTypes.string,
  isLoading: PropTypes.bool,
  isDragActive: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string
};

export default Zone;