import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

import {
  Row,
  Col
} from 'app/components/common/Grid';
import Title from 'app/components/Layouts/App/Title';
import SeeAll from '../SeeAll';
import Policy from './Policy';
import NoData from '../NoData';

const Policies = ({
  activeCount,
  policies
}) => (
  <Styled className="policies">
    <Title
      title="My Policies"
      className="c-app-title--in-dashboard"
    >
      <SeeAll to="/app/policies">
        {
          activeCount > 2 && (
            `See all (${activeCount})`
          )
        }
      </SeeAll>
    </Title>

    {
      policies.length
        ? policies.length === 1
          ? <Policy policy={policies[0]} />
          : (
            <Row>
              <Col className="col-12 col-m-6">
                <Policy policy={policies[0]} />
              </Col>

              <Col className="col-12 col-m-6">
                <Policy policy={policies[1]} />
              </Col>
            </Row>
          )
        : (
          <NoData iconName="NoPolicies">
            You have no active policies
          </NoData>
        )
    }
  </Styled>
);

Policies.propTypes = {
  activeCount: PropTypes.number,
  policies: PropTypes.arrayOf(PropTypes.object)
};

export default Policies;