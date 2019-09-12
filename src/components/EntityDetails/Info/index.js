import React from 'react';
import classNames from 'classnames';

import Styled from './styles';

const Info = ({
  label,
  value,
  className,
  ...props
}) => (
  <Styled
    className={
      classNames(
        'entity-details-info',
        className
      )
    }
    {...props}
  >
    <div className="entity-details-info__label">
      {label}
    </div>

    <div className="entity-details-info__value">
      {value}
    </div>
  </Styled>
);

Info.defaultProps = {
  labelColor: 'grey-3',
  valueColor: 'grey-5',
  indents: 0
};

export default Info;