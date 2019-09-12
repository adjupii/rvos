import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useShowPolicyStatus } from './logic';

import Styled from './styles';

import Rotate from 'app/components/common/Rotate';

const PolicyStatus = ({
  status,
  className
}) => {
  const showStatus = useShowPolicyStatus(status);

  return (
    <Styled
      className={
        classNames(
          'policy-status',
          `policy-status--${status}`,
          className
        )
      }
    >
      <Rotate
        to="-90"
        className="policy-status__text"
      >
        {showStatus}
      </Rotate>
    </Styled>
  );
};

PolicyStatus.propTypes = {
  status: PropTypes.string,
  className: PropTypes.string
};

export default PolicyStatus;