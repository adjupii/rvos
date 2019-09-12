import {
  withHandlers,
  compose
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { notifications } from 'app/components/common/Notifications';

import { sendNewRequest } from 'app/Redux/actions/contact-us';

const mapStateToProps = state => ({
  user: state.user.data,
  isFetching: state.requestSuccess.isFetching
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {
      sendNewRequest
    },
    dispatch
  )
);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),

  withHandlers({
    handleAction: ({ sendNewRequest, history }) => values => {
      sendNewRequest({
        contact_us: {
          ...values,
          topic: Number(values.topic)
        }
      })
        .then(() => {
          notifications.create({
            message: 'Your request was successfully sent.'
          })();
          history.push('/app/contact-us');
        })
        .catch(e=>{
          notifications.create({
            message: `${e.message}, Please try with another data`,
            type: 'error'
          })();
        });
    }
  })
);