import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Styled from './styles';

import Close from 'app/components/Icons/Close';

import InfoIcon from 'app/components/Icons/Notifications/Info';
import SuccessIcon from 'app/components/Icons/Notifications/Success';
import ErrorIcon from 'app/components/Icons/Notifications/Error';

const ICONS = {
  info: InfoIcon,
  success: SuccessIcon,
  error: ErrorIcon
};

const Notification = ({
  type,
  message,
  close,
  closeNotify
}) => {
  const Icon = ICONS[type];

  return (
    <Styled
      className={
        classNames(
          'notify',
          { 'notify--with-close': close }
        )
      }
    >
      <div className={`notify__type notify__type--${type}`}>
        <Icon
          width="32"
          height="32"
        />
      </div>
  
      <div className="notify__message">
        {message}
      </div>
  
      {
        close && (
          <Close
            width="24"
            height="24"
            onClick={closeNotify}
            className="notify__close"
          />
        )
      }
    </Styled>
  );
};

Notification.defaultProps = {
  type: 'info',
  close: false
};

Notification.propTypes = {
  type: PropTypes.string,
  message: PropTypes.node,
  timeout: PropTypes.number,
  close: PropTypes.bool,
  closeNotify: PropTypes.func
};

export default Notification;