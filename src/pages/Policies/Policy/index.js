import React from 'react';
import PropTypes from 'prop-types';

import { usePolicyStatus } from 'app/hooks/policies';

import {
  getBillingType,
  getNextPaymentDateLabel
} from 'app/helpers/billing';
import {
  getRemainingBalance,
  getRemainingBalanceLabel,
  getPolicyActions
} from 'app/helpers/policy';
import { goToPage } from 'app/history';
import {
  date,
  currency
} from 'app/format';

import Styled from './styles';

import PolicyStatus from 'app/components/Policies/PolicyStatus';
import Divider from 'app/components/common/Divider';
import PolicyClaim from './PolicyClaim';
import ArrowRight from 'app/components/Icons/ArrowRight';
import PolicyAddressDate from 'app/components/Policies/PolicyAddressDate';
import PolicyBilling from './PolicyBilling';
import PolicyInfoHead from 'app/components/Policies/PolicyInfoHead';
import Attention from 'app/components/Icons/Attention';

const Policy = ({
  policy,
  claims,
  billing
}) => {
  const
    status = usePolicyStatus(policy.status),

    billingType = getBillingType(
      billing.billToType,
      billing.remainingBalance
    ),

    actions = getPolicyActions(
      status,
      policy.policyNumber
    );

  return (
    <Styled
      className="policy"
      onClick={goToPage(`/app/policies/${policy.policyNumber}`)}
    >
      <PolicyStatus
        status={policy.status}
        className="in-policy-list"
      />

      <div className="policy__inner">
        <div className="policy__info">
          <div className="policy__left-right">
            <div className="policy__left">
              <PolicyInfoHead
                policy={policy}
                actions={actions}
                className="in-policy-list"
              />

              <PolicyAddressDate
                address={policy.address}
                date={{
                  beginDate: policy.beginDate,
                  endDate: policy.endDate
                }}
              />
            </div>

            <Divider
              indents="0 24px"
              className="policy__left-right-divider"
            />

            <div className="policy__right">
              {
                policy.warningMessage
                  ? (
                    <div className="policy__warning">
                      <Attention
                        width="24"
                        height="24"
                      />
                      
                      <div className="policy__warning-message">
                        {policy.warningMessage}
                      </div>
                    </div>
                  ) 
                  : (
                    <div className="policy__billing-info">
                      {
                        billing.paymentPlan && (
                          <div className="policy__payment-plan">
                            {billing.paymentPlan}
                          </div>
                        )
                      }

                      <div className="policy__billing-holder">
                        <div className="policy__billing-row">
                          {
                            status === 'active' && (
                              <PolicyBilling
                                label="Policy Total"
                                value={currency(billing.totalPremium || 0)}
                                valueColor="green-1"
                              />
                            )
                          }

                          <PolicyBilling
                            label={getRemainingBalanceLabel(billingType)}
                            value={
                              getRemainingBalance(
                                billingType,
                                billing.remainingBalance
                              )
                            }
                          />
                        </div>

                        <div className="policy__billing-row policy__billing-row--next-payment">
                          {
                            billing.nextPaymentAmt !== undefined
                            && !billingType
                            && (
                              <PolicyBilling
                                label="Payment Amount Due"
                                value={currency(billing.nextPaymentAmt)}
                              />
                            )
                          }

                          {
                            billing.nextPaymentDueDate
                            && !billingType
                            && (
                              <PolicyBilling
                                label={getNextPaymentDateLabel(billing.paymentMethod)}
                                value={date(billing.nextPaymentDueDate)}
                              />
                            )
                          }
                        </div>
                      </div>
                    </div>
                  )
              }
            </div>
          </div>

          {
            claims.length
              ? (
                <div className="policy__claims">
                  {
                    claims.map(claim => (
                      <PolicyClaim
                        key={claim.claimNumber || claim.fnolNo}
                        claim={claim}
                      />
                    ))
                  }
                </div>
              )
              : null
          }
        </div>

        <div className="policy__arrow-holder">
          <ArrowRight
            width="24"
            height="24"
          />
        </div>
      </div>
    </Styled>
  );
};

Policy.defaultProps = {
  claims: [],
  billing: {}
};

Policy.propTypes = {
  policy: PropTypes.object,
  claims: PropTypes.arrayOf(PropTypes.object),
  billing: PropTypes.object
};

export default Policy;