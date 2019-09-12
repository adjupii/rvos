import React from 'react';
import PropTypes from 'prop-types';

import { usePolicies } from 'app/hooks/policies';

import {
  Row,
  Col
} from 'app/components/common/Grid';
import Policy from '../Policy';
import Display from 'app/components/common/Display';
import QuickLinks from 'app/components/common/QuickLinks';
import CommonQuestions from 'app/components/CommonQuestions';
import H2 from 'app/components/Layouts/App/H2';

const Documents = ({
  policies,
  questions,
  quickLinks
}) => {
  const activePolicies = usePolicies(policies, 'active');

  return (
    <>
      <H2>
        Documents
      </H2>

      <Row>
        <Col className="col-12 col-l-8 col-xl-9">
          {
            activePolicies.length
              ? (
                activePolicies.map(policy => (
                  <Policy
                    key={policy.policyNumber}
                    policy={policy}
                  />
                ))
              )
              : 'No policies found'
          }
        </Col>

        <Col className="col-4 col-xl-3">
          <Display className="d-none d-l-block">
            <QuickLinks
              quickLinks={quickLinks}
              pageName="documents"
            />

            <CommonQuestions questions={questions} />
          </Display>
        </Col>
      </Row>
    </>
  );
};

Documents.propTypes = {
  policies: PropTypes.arrayOf(PropTypes.object),
  questions: PropTypes.arrayOf(PropTypes.object),
  quickLinks: PropTypes.arrayOf(PropTypes.object)
};

export default Documents;