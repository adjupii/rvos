import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

import {
  Row,
  Col
} from 'app/components/common/Grid';
import Notify from 'app/components/Notify';
import Title from 'app/components/Layouts/App/Title';
import SeeAll from '../SeeAll';
import BillingAccount from 'app/components/BillingAccount';
import NoData from '../NoData';

const BillingAndPayment = ({
  billing,
  isWarning = false
}) => (
  <Styled className="billing-and-payment">
    <Title
      title="Billing and Payment"
      className="c-app-title--in-dashboard"
    >
      <SeeAll to="/app/billing" />
    </Title>

    {
      isWarning && (
        <Notify
          type="error"
          className="c-notify--dashboard-warning"
        >
          You have a policy that is pending cancellation due to non payment of premium.
        </Notify>
      )
    }

    {
      billing.length
        ? billing.length === 1
          ? (
            <BillingAccount
              data={billing[0]}
              location="dashboard"
              withActions={false}
            />
          )
          : (
            <Row>
              <Col className="col-12 col-xl-6">
                <BillingAccount
                  data={billing[0]}
                  location="dashboard-half"
                  withActions={false}
                />
              </Col>

              <Col className="col-12 col-xl-6">
                <BillingAccount
                  data={billing[1]}
                  location="dashboard-half"
                  withActions={false}
                />
              </Col>
            </Row>
          )
        : (
          <NoData iconName="NoBillings">
            Account information not found
          </NoData>
        )
    }
  </Styled>
);

BillingAndPayment.propTypes = {
  billing: PropTypes.arrayOf(PropTypes.object),
  isWarning: PropTypes.bool
};

export default BillingAndPayment;