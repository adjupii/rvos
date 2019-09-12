import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useNextPaymentDateLabel } from 'app/hooks/billing';

import {
  currency,
  date
} from 'app/format';

import Styled from './styles';

import {
  Row,
  Col
} from 'app/components/common/Grid';
import EntityDetailsInfo from 'app/components/EntityDetails/Info';

const Policy = ({
  data,
  last
}) => {
  const nextPaymentDateLabel = useNextPaymentDateLabel(data.paymentMethod);

  return (
    <Styled
      className={
        classNames(
          'policy',
          { 'policy--no-last': !last }
        )
      }
    >
      <Row>
        <Col className="col-6 col-xl-4">
          <EntityDetailsInfo
            label="Policy"
            value={data.policyNo}
          />
        </Col>

        <Col className="col-6 col-xl-4">
          <EntityDetailsInfo
            label="Remaining Balance"
            value={currency(data.remainingBalance)}
          />
        </Col>

        <Col className="col-6 col-xl-4">
          <EntityDetailsInfo
            label="Payment Plan"
            value={data.paymentPlan}
          />
        </Col>

        <Col className="col-6 col-xl-4">
          <EntityDetailsInfo
            label="Payment Amount Due"
            value={currency(data.nextPaymentAmt)}
          />
        </Col>

        {
          data.nextPaymentAmt > 0 && (
            <Col className="col-6 col-xl-4">
              <EntityDetailsInfo
                label={nextPaymentDateLabel}
                value={date(data.nextPaymentDueDate)}
              />
            </Col>
          )
        }
      </Row>
    </Styled>
  );
};

Policy.propTypes = {
  data: PropTypes.object,
  last: PropTypes.bool
};

export default Policy;