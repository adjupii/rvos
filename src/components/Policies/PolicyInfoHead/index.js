import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { joinedText } from 'app/format';

import Styled from './styles';

import { Link } from 'app/components/common/Button';
import DropdownMenu from 'app/components/common/DropdownMenu';

const PolicyInfoHead = ({
  policy,
  actions,
  className
}) => {
  const handleStopBubbling = useCallback(
    e => {
      e.stopPropagation();
    },
    []
  );

  return (
    <Styled
      className={
        classNames(
          'policy-info-head',
          className
        )
      }
    >
      <div className="policy-info-head__left">
        <div className="policy-info-head__insured-name">
          {policy.insuredName}
        </div>

        <div className="policy-info-head__desc">
          {
            joinedText(
              [ policy.policyNumber, policy.typeDescShort ],
              { sep: ' | ' }
            )
          }
        </div>
      </div>

      <div className="policy-info-head__right">
        <Link
          to={`/app/policies/${policy.policyNumber}/documents`}
          onClick={handleStopBubbling}
          className="policy-info-head__documents"
        >
          DOCUMENTS
        </Link>

        {
          actions && (
            <DropdownMenu
              onClick={handleStopBubbling}
              items={actions}
              className="policy-info-head__actions"
            />
          )
        }
      </div>
    </Styled>
  );
};

PolicyInfoHead.propTypes = {
  policy: PropTypes.object,
  actions: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string
};

export default PolicyInfoHead;