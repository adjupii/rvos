import React from 'react';
import PropTypes from 'prop-types';

import useScrollToTop from 'app/hooks/useScrollToTop';

import Loader from './Loader';
import App from './App';

const LayoutAppContainer = ({
  location: { pathname },
  isFetching,
  user,
  children,
  toggleNavMobile,
  navMobileIsOpen
}) => {
  useScrollToTop(pathname);

  if (isFetching) {
    return <Loader />;
  }

  if (user) {
    return (
      <App
        user={user}
        toggleNavMobile={toggleNavMobile}
        navMobileIsOpen={navMobileIsOpen}
      >
        {children}
      </App>
    );
  }

  return null;
};

LayoutAppContainer.propTypes = {
  location: PropTypes.object,
  isFetching: PropTypes.bool,
  user: PropTypes.object,
  children: PropTypes.node,
  toggleNavMobile: PropTypes.func,
  navMobileIsOpen: PropTypes.bool
};

export default LayoutAppContainer;