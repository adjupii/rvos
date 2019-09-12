import React from 'react';
import classNames from 'classnames';

import Styled from './styles';

const StatusBar = ({
  status,
  type,
  ...props
}) => (
  <Styled
    className={
      classNames(
        'status-bar',
        {
          'status-bar--success': type === 'success',
          'status-bar--error': type === 'error'
        }
      )
    }
    {...props}
  >
    <div
      className="status-bar__bar"
      style={{ width: `${status}%` }}
    />
  </Styled>
);

StatusBar.defaultProps = {
  height: '4px'
};

export default StatusBar;