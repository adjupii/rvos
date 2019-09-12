import {
  lifecycle,
  withHandlers,
  compose
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { tokenCheck } from 'app/Redux/actions/confirm-email';

const mapStateToProps = state => ({
  isFetching: state.tokenCheck.isFetching,
  status: state.tokenCheck.status
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {
      tokenCheck
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
    goToPage: ({ history }) => page => () => {
      history.push(page);
    }
  }),

  lifecycle({
    componentDidMount() {
      const {
        tokenCheck,
        match: { params }
      } = this.props;

      tokenCheck(params.token);
    }
  })
);