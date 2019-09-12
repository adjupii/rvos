import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { usePolicyStatus } from 'app/hooks/policies';

import {
  currency,
  joinedText
} from 'app/format';
import { getBillingType } from 'app/helpers/billing';
import {
  getRemainingBalance,
  getRemainingBalanceLabel,
  getPolicyActions
} from 'app/helpers/policy';

import Styled from './styles';

import Card from 'app/components/common/Card';
import Notify from 'app/components/Notify';
import Lock from 'app/components/Icons/Lock';
import Status from 'app/components/EntityDetails/Status';
import Info from 'app/components/EntityDetails/Info';
import PolicyAddressDate from 'app/components/Policies/PolicyAddressDate';
import PolicyDocument from 'app/components/Icons/PolicyDocument';
import PolicyClosedDocument from 'app/components/Icons/PolicyClosedDocument';
import PolicyBillingLink from './PolicyBillingLink';
import PolicyUpdateLink from './PolicyUpdateLink';
import Divider from 'app/components/common/Divider';
import DropdownMenu from 'app/components/common/DropdownMenu';
import { Link } from 'app/components/common/Button';

const POLICY_ICON = {
  active: PolicyDocument,
  closed: PolicyClosedDocument
};

const PolicyInfo = ({
  info,
  billing
}) => {
  const
    status = usePolicyStatus(info.status),

    Icon = POLICY_ICON[status],

    billingType = getBillingType(
      billing.billToType,
      billing.remainingBalance
    ),

    actions = getPolicyActions(
      status,
      info.policyNumber
    );

  return (
    <Styled className="policy-info">
      {
        status === 'closed' && (
          <Notify
            type="error"
            className="c-notify--policy-closed"
          >
            <Lock
              width="16"
              height="19"
              className="c-notify__icon"
            />

            <div>
              Policy is closed
            </div>
          </Notify>
        )
      }

      <Card billet="entity-policies">
        <div className="policy-info__box-holder">
          <div className="policy-info__top">
            <div className="policy-info__main-info-holder">
              <Icon
                width="48"
                height="48"
                className="policy-info__icon"
              />

              <div>
                <div className="policy-info__insured-name-holder">
                  <div className="policy-info__insured-name">
                    {info.insuredName}
                  </div>

                  <Status status={status} />
                </div>

                <div className="policy-info__desc">
                  {
                    joinedText(
                      [ info.policyNumber, info.typeDesc ],
                      { sep: ' | ' }
                    )
                  }
                </div>
              </div>
            </div>

            <div className="policy-info__top-links">
              {
                status === 'active' && (
                  <Fragment>
                    <div className="policy-info__divider-holder">
                      <PolicyUpdateLink policyNumber={info.policyNumber} />
                    </div>

                    <Divider className="policy-info__top-links-divider" />
                  </Fragment>
                )
              }

              <Link
                to={`/app/policies/${info.policyNumber}/documents`}
                className="policy-info__documents-link"
              >
                DOCUMENTS
              </Link>
            </div>

            <DropdownMenu
              items={actions}
              className="policy-info__actions"
            />
          </div>

          <div className="policy-info__bottom">
            <div className="policy-info__divider-holder">
              <PolicyAddressDate
                address={info.address}
                date={{
                  beginDate: info.beginDate,
                  endDate: info.endDate
                }}
              />
            </div>

            <Divider className="policy-info__divider-bottom-ver" />

            <Divider
              direction="horizontal"
              className="policy-info__divider-bottom-hor"
            />

            <div className="policy-info__divider-holder">
              <div className="policy-info__policy-billing-link">
                <Info
                  label="Account Number"
                  value={
                    billing.accountNumber
                      ? <PolicyBillingLink billingAccount={billing.accountNumber} />
                      : 'N/A'
                  }
                />
              </div>

              {
                status === 'active' && (
                  <Info
                    label="Policy Total"
                    value={currency(billing.totalPremium || 0)}
                    valueColor="green-1"
                  />
                )
              }

              <div className="policy-info__remaining-balance">
                <Info
                  label={getRemainingBalanceLabel(billingType)}
                  value={
                    getRemainingBalance(
                      billingType,
                      billing.remainingBalance
                    )
                  }
                  valueColor="green-1"
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Styled>
  );
};

PolicyInfo.propTypes = {
  info: PropTypes.object,
  billing: PropTypes.object
};

export default PolicyInfo;