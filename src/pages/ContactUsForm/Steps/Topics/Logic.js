import {
  lifecycle,
  compose
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getRequestTopics } from 'app/Redux/actions/contact-us';


const mapStateToProps = state => ({
  isFetching: state.requestTopics.isFetching,
  requestTopics: state.requestTopics.data
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {
      getRequestTopics
    },
    dispatch
  )
);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),

  lifecycle({
    componentDidMount() {
      const { getRequestTopics } = this.props;

      getRequestTopics();
    }
  })
);