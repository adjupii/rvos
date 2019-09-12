import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

import useInnerPages from 'app/hooks/useInnerPages';
import { onAction } from './logic';

import {
  Row,
  Col
} from 'app/components/common/Grid';
import Title from 'app/components/Layouts/App/Title';
import Card from 'app/components/common/Card';
import Steps from './Steps';
import SuccessMessage from './SuccessMessage';

const NewClaim = () => {
  const [ fetching, setFetching ] = useState(false);

  const user = useSelector(state => state.user.data);

  const {
    pageName,
    pageData: {
      fnolNumber
    },
    changePage
  } = useInnerPages('new-claim');

  const handleAction = useCallback(
    values => {
      onAction(setFetching, changePage, values);
    },
    [ setFetching, changePage ]
  );

  return (
    <>
      <Title
        title="Create a claim"
        back
      />

      {
        pageName === 'new-claim' && (
          <Row>
            <Col className="col-12">
              <Card billet="entity-claims">
                <Steps
                  action={handleAction}
                  buttonDisabled={fetching}
                  user={user}
                />
              </Card>
            </Col>
          </Row>
        )
      }

      {
        pageName === 'new-claim-success' && (
          <Row className="row-center">
            <Col className="col-10">
              <SuccessMessage fnolNumber={fnolNumber} />
            </Col>
          </Row>
        )
      }
    </>
  );
};

export default NewClaim;