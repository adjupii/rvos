import React from 'react';
import classNames from 'classnames';

import { joinedText } from 'app/format';

import Styled from './styles';

import CheckIcon from 'app/components/common/Form/Check/Icon';
import PolicyAddressDate from 'app/components/Policies/PolicyAddressDate';

const ClaimPolicy = ({
  id,
  value,
  policy,
  ...props
}) => {
  const selected = id === value;

  return (
    <Styled
      htmlFor={id}
      className={
        classNames(
          'claim-policy',
          { 'claim-policy--is-selected': selected }
        )
      }
    >
      <input
        type="radio"
        id={id}
        value={id}
        checked={selected}
        {...props}
      />

      <div className="claim-policy__top">
        <CheckIcon
          type="radio"
          selected={selected}
          className="claim-policy__check-icon"
        />

        <div className="claim-policy__desc-holder">
          <div className="claim-policy__desc">
            {
              joinedText(
                [ policy.insuredName, policy.typeDescShort ],
                { sep: ' | ' }
              )
            }
          </div>

          <div>
            {policy.policyNumber}
          </div>
        </div>
      </div>

      <div className="claim-policy__bottom">
        <PolicyAddressDate
          date={{
            beginDate: policy.beginDate,
            endDate: policy.endDate
          }}
          className="in-claim-policy"
        />
      </div>
    </Styled>
  );
};

export default ClaimPolicy;