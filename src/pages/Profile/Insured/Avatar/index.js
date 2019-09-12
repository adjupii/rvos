import React from 'react';
import { useSelector } from 'react-redux';
import { parse } from 'bytes';
import PropTypes from 'prop-types';

import Styled from './styles';

import Dropzone from 'app/components/common/Dropzone';
import Zone from './Zone';
import Status from './Status';

const Avatar = ({
  avatar,
  uploadAvatar,
  isLoading,
  width,
  height,
}) => {
  const {
    morales_file_max_size = {}
  } = useSelector(state => state.user.data.settings);

  return (
    <Styled className="profile-avatar">
      <div className="profile-avatar__dropzone">
        <Dropzone
          multiple={false}
          action={uploadAvatar}
          disabled={isLoading}
          maxSize={parse(`${morales_file_max_size.value}MB`)}
          renderZone={props => (
            <Zone
              avatar={avatar}
              width={width}
              height={height}
              isLoading={isLoading}
              {...props}
            />
          )}
          renderStatus={({
            files,
            ...props
          }) => (
            <Status
              file={files[0]}
              {...props}
            />
          )}
        />
      </div>

    </Styled>
  );
};

Avatar.defaultProps = {
  width: '72px',
  height: '72px'
};

Avatar.propTypes = {
  avatar: PropTypes.string,
  uploadAvatar: PropTypes.func,
  isLoading: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string
};

export default Avatar;