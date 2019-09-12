import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

import Styled from './styles';

import Notification from './Notification';

const Notifications = ({
  notifications,
  handleRequestHide
}) => (
  <Styled>
    <CSSTransitionGroup
      transitionName="notify"
      transitionEnterTimeout={400}
      transitionLeaveTimeout={400}
    >
      {
        notifications.map((notify) => {
          return (
            <Notification
              key={notify.id}
              closeNotify={handleRequestHide(notify)}
              {...notify}
            />
          );
        })
      }
    </CSSTransitionGroup>
  </Styled>
);

Notifications.propTypes = {
  notifications: PropTypes.array,
  handleRequestHide: PropTypes.func
};

export default Notifications;