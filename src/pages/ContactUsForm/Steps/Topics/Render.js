import React from 'react';
import PropTypes from 'prop-types';

import Loader from 'app/components/common/Loader';
import Step1 from 'app/components/Forms/ContactUs/Step1';

const Topics = ({
  isFetching,
  requestTopics,
  ...props
}) => {
  if (isFetching) {
    return <Loader />;
  }

  if (requestTopics) {
    if (requestTopics.length) {
      return (
        <Step1
          topics={requestTopics}
          {...props}
        />
      );
    }

    return 'No topics found';
  }

  return null;
};

Topics.propTypes = {
  isFetching: PropTypes.bool,
  requestTopics: PropTypes.array
};

export default Topics;