import React from 'react';
import PropTypes from 'prop-types';

import { usePolicies } from 'app/hooks/policies';
import {
  useClaims,
  useClaimsWithinLastYear
} from 'app/hooks/claims';

import {
  Row,
  Col
} from 'app/components/common/Grid';
import Display from 'app/components/common/Display';
import Policies from '../Policies';
import BillingAndPayment from '../BillingAndPayment';
import Claims from '../Claims';
import MyAgents from '../MyAgents';
import QuickLinks from '../QuickLinks';
import CommonQuestions from 'app/components/CommonQuestions';

const Dashboard = ({
  data
}) => {
  const [
    billing,
    policies,
    claims,
    agents,
    quickLinks,
    questions
  ] = data;

  const
    dashboardPolicies = usePolicies(
      policies,
      'canceled, pending_cancel, closed, active',
      true
    ),

    pendingCancelPolicies = usePolicies(
      policies,
      'pending_cancel'
    ),

    activePolicies = usePolicies(
      policies,
      'active'
    ),

    openClaims = useClaims(claims, 'active'),

    closedClaims = useClaimsWithinLastYear(
      useClaims(claims, 'closed')
    );

  return (
    <Row>
      <Col className="col-12 col-l-8">
        <BillingAndPayment
          isWarning={!!pendingCancelPolicies.length}
          billing={billing}
        />

        <Policies
          activeCount={activePolicies.length}
          policies={dashboardPolicies}
        />

        <Claims
          openClaims={openClaims}
          closedClaims={closedClaims}
        />
      </Col>

      <Col className="col-12 col-m-6 col-l-4">
        <MyAgents agents={agents} />

        <Display className="d-none d-l-block">
          <QuickLinks quickLinks={quickLinks} />

          <CommonQuestions
            questions={questions}
            titleClassName="c-app-h2--common-questions-dashboard"
          />
        </Display>
      </Col>
    </Row>
  );
};

Dashboard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.object)
  )
};

export default Dashboard;