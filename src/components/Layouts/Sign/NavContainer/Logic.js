import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from 'app/Redux/actions/sign';

const mapStateToProps = state => ({
  page: state.sign.page
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(
    actions,
    dispatch
  )
);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);