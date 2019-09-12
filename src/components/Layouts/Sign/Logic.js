import {
  compose
} from 'recompose';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  page: state.sign.page
});

export default compose(
  connect(
    mapStateToProps
  )
);