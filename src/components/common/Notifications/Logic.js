import {
  compose,
  lifecycle,
  withState,
  withHandlers
} from 'recompose';
import notifications from './NotificationService';

export default compose(
  withState(
    'notifications',
    'updateNotifications',
    []
  ),

  withHandlers({
    handleUpdateNotifications: ({ updateNotifications }) => notifications => {
      updateNotifications(() => notifications);
    },

    handleRequestHide: () => notification => () => {
      notifications.remove(notification);
    }
  }),

  lifecycle({
    componentWillMount () {
      notifications.addChangeListener(this.props.handleUpdateNotifications);
    },
  
    componentWillUnmount () {
      notifications.removeChangeListener(this.props.handleUpdateNotifications);
    }
  })
);