import React from 'react';

import Styled from './styles';

const PolicyBilling = ({
  label,
  value,
  ...props
}) => (
  <Styled
    className="policy-billing"
    {...props}
  >
    <div className="policy-billing__value">
      {value}
    </div>

    <div className="policy-billing__label">
      {label}
    </div>
  </Styled>
);

PolicyBilling.defaultProps = {
  valueColor: 'grey-4'
};

export default PolicyBilling;