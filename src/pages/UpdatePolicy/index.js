import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { onAction } from './logic';

import { joinedText } from 'app/format';

import {
  Row,
  Col
} from 'app/components/common/Grid';
import Title from 'app/components/Layouts/App/Title';
import Card from 'app/components/common/Card';
import Steps from 'app/components/Steps';
import Step from 'app/components/Steps/Step';
import Step1 from 'app/components/Forms/UpdatePolicy/Step1';
import Step2 from 'app/components/Forms/UpdatePolicy/Step2';

const UpdatePolicy = ({
  match: {
    params: { policyNumber }
  }
}) => {
  const
    [ fetching, setFetching ] = useState(false),

    user = useSelector(state => state.user.data),

    handleAction = useCallback(
      values => {
        onAction(setFetching, policyNumber, values);
      },
      [ setFetching, policyNumber ]
    );

  return (
    <>
      <Title
        title={
          joinedText(
            [
              'Update policy',
              policyNumber
            ],
            { sep: ' | ' }
          )
        }
        back
      />

      <Row>
        <Col className="col-12 col-l-10 col-xl-9">
          <Card billet="entity-policies">
            <Steps
              action={handleAction}
              buttonDisabled={fetching}
            >
              <Step
                title="Request"
                component={Step1}
              />

              <Step
                title="Contact"
                component={Step2}
                user={user}
              />
            </Steps>
          </Card>
        </Col>
      </Row>
    </>
  );
};

UpdatePolicy.propTypes = {
  match: PropTypes.object
};

export default UpdatePolicy;