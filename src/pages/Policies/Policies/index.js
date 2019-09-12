import React from 'react';
import PropTypes from 'prop-types';

import { usePolicies } from 'app/hooks/policies';
import { useBillingGroupedByPolicyNo } from 'app/hooks/billing';
import {
  useClaims,
  useClaimsGroupedByPolicyNo
} from 'app/hooks/claims';

import Styled from './styles';

import H2 from 'app/components/Layouts/App/H2';
import {
  Row,
  Col
} from 'app/components/common/Grid';
import Display from 'app/components/common/Display';
import Tabs from 'app/components/Tabs';
import PolicyList from '../PolicyList';
import NoData from 'app/components/EntityDetails/NoData';
import QuickLinks from 'app/components/common/QuickLinks';
import CommonQuestions from 'app/components/CommonQuestions';

const Policies = ({
  policies,
  billing,
  claims,
  questions,
  quickLinksList
}) => {
  const
    activePolicies = usePolicies(policies, 'active, pending_cancel'),

    closedPolicies = usePolicies(policies, 'closed, canceled'),

    policiesBilling = useBillingGroupedByPolicyNo(billing),

    policiesClaims = useClaimsGroupedByPolicyNo(
      useClaims(claims, 'active')
    );

  return (
    <Styled className="l-policies">
      <H2>
        My Policies
      </H2>

      <Row>
        <Col className="col-12 col-l-8 col-xl-9">
          <Tabs
            titles={[
              'Active policies',
              'Closed policies'
            ]}
            className="tabs--policy-list"
          >
            {
              activePolicies.length
                ? (
                  <PolicyList
                    policies={activePolicies}
                    claims={policiesClaims}
                    billing={policiesBilling}
                  />
                )
                : (
                  <NoData iconName="PoliciesNoData">
                    You have no active policies
                  </NoData>
                )
            }

            {
              closedPolicies.length
                ? (
                  <PolicyList
                    policies={closedPolicies}
                    claims={policiesClaims}
                    billing={policiesBilling}
                  />
                )
                : (
                  <NoData iconName="PoliciesNoData">
                    You have no closed policies
                  </NoData>
                )
            }
          </Tabs>
        </Col>

        <Col className="col-l-4 col-xl-3">
          <Display className="d-none d-l-block">
            <div className="l-policies__sidebar-holder">
              <QuickLinks
                quickLinks={quickLinksList}
                pageName="policies"
              />

              <CommonQuestions questions={questions} />
            </div>
          </Display>
        </Col>
      </Row>
    </Styled>
  );
};

Policies.propTypes = {
  policies: PropTypes.arrayOf(PropTypes.object),
  billing: PropTypes.arrayOf(PropTypes.object),
  claims: PropTypes.arrayOf(PropTypes.object),
  questions: PropTypes.arrayOf(PropTypes.object),
  quickLinksList: PropTypes.arrayOf(PropTypes.object)
};

export default Policies;