import { useMemo } from 'react';
import {
  compose,
  withStateHandlers,
  lifecycle
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getUser,
  logOut
} from 'app/Redux/actions/user';

const mapStateToProps = state => ({
  isFetching: state.user.isFetching,
  user: state.user.data
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {
      getUser
    },
    dispatch
  )
);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),

  withStateHandlers(
    {
      navMobileIsOpen: false
    },
    {
      toggleNavMobile: ({ navMobileIsOpen }) => () => ({
        navMobileIsOpen: !navMobileIsOpen
      })
    }
  ),

  lifecycle({
    componentDidUpdate(prevProps) {
      const
        {
          navMobileIsOpen,
          toggleNavMobile,
          location: { pathname }
        } = this.props,

        {
          location: { pathname: prevPathName }
        } = prevProps;

      if (
        navMobileIsOpen
        && (pathname !== prevPathName)
      ) {
        toggleNavMobile();
      }
    },

    componentDidMount () {
      const { getUser } = this.props;

      getUser();
    }
  })
);

const useItemsForHeaderProfile = dispatch => useMemo(
  () => [
    {
      to: '/app/profile',
      children: 'Profile'
    },
    {
      to: '/sign/in',
      onClick: () => {
        dispatch(logOut());
      },
      children: 'Sign Out'
    }
  ],
  [ dispatch ]
);

export {
  useItemsForHeaderProfile
};