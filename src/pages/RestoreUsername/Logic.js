import {
  lifecycle,
  withHandlers,
  compose
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { tokenCheck } from 'app/Redux/actions/restore-username';
import { setSignPage } from 'app/Redux/actions/sign';

const mapStateToProps = state => ({
  isFetching: state.tokenCheck.isFetching,
  status: state.tokenCheck.status
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {
      tokenCheck,
      setSignPage
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
    goToPage: ({ setSignPage, history }) => page => () => {
      setSignPage(page);

      history.push('/sign/in');
    }
  }),

  lifecycle({
    componentDidMount() {
      const {
        tokenCheck,
        match: { params },
        history
      } = this.props;

      tokenCheck(params.token, history);
    }
  })
);