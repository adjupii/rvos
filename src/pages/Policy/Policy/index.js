import React from 'react';
import PropTypes from 'prop-types';

import { useCurrentTerm } from 'app/hooks/policies';

import Styled from './styles';

import {
  Row,
  Col
} from 'app/components/common/Grid';
import Display from 'app/components/common/Display';
import Title from 'app/components/Layouts/App/Title';
import Terms from '../Terms';
import Loader from 'app/components/common/Loader';
import PolicyInfo from '../PolicyInfo';
import PolicyDetails from '../PolicyDetails';
import MyAgent from '../MyAgent';
import QuickLinks from 'app/components/common/QuickLinks';

const Policy = ({
  policyNumber,
  policy: {
    policy,
    sections
  },
  billing,
  terms,
  agent,
  quickLinks,
  selectedTerm: term,
  setTerm,
  fetching
}) => {
  const
    { beginDate } = useCurrentTerm(terms),

    selectedTerm = term || beginDate;

  return (
    <Styled className="l-policy">
      <Row>
        <Col className="col-12 col-l-8 col-xl-9">
          <Title
            title={policy.lineOfBusiness}
            className="c-app-title--policy-details"
          >
            {
              terms.length > 1 && (
                <Terms
                  selected={selectedTerm}
                  onChange={setTerm}
                  terms={terms}
                />
              )
            }
          </Title>

          <div className="l-policy__box-holder">
            {
              fetching
                ? <Loader />
                : policy && billing
                  ? (
                    <PolicyInfo
                      info={policy}
                      billing={billing}
                    />
                  )
                  : null
            }
          </div>

          <div className="l-policy__box-holder">
            <PolicyDetails
              policyNumber={policyNumber}
              sections={sections}
              selectedTerm={selectedTerm}
            />
          </div>
        </Col>

        <Col className="col-12 col-m-6 col-l-4 col-xl-3">
          <div className="l-policy__box-holder">
            <MyAgent agent={agent} />
          </div>

          <Display className="d-none d-l-block">
            <QuickLinks
              quickLinks={quickLinks}
              pageName="policies"
            />
          </Display>
        </Col>
      </Row>
    </Styled>
  );
};

Policy.propTypes = {
  policyNumber: PropTypes.string,
  policy: PropTypes.shape({
    policy: PropTypes.object,
    sections: PropTypes.object
  }),
  billing: PropTypes.object,
  terms: PropTypes.arrayOf(PropTypes.object),
  agent: PropTypes.object,
  quickLinks: PropTypes.arrayOf(PropTypes.object),
  selectedTerm: PropTypes.string,
  setTerm: PropTypes.func,
  fetching: PropTypes.bool
};

export default Policy;