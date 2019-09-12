import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  uploadAvatar,
  setUserParam
} from 'app/Redux/actions/user';

const mapStateToProps = state => ({
  user: state.user.data,
  isLoadingAvatar: state.uploadAvatar.isFetching
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {
      uploadAvatar,
      setUserParam
    },
    dispatch
  )
);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);