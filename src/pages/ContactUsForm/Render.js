import React from 'react';
import PropTypes from 'prop-types';

import {
  Row,
  Col
} from 'app/components/common/Grid';
import Title from 'app/components/Layouts/App/Title';
import Card from 'app/components/common/Card';
import Steps from './Steps';

const ContactUsForm = ({
  handleAction,
  isFetching,
  user
}) => (
  <>
    <Title
      title="Contact us"
      back
    />

    <Row>
      <Col className="col-12 col-l-10 col-xl-9">
        <Card>
          <Steps
            action={handleAction}
            buttonDisabled={isFetching}
            user={user}
          />
        </Card>
      </Col>
    </Row>
  </>
);

ContactUsForm.propTypes = {
  user: PropTypes.object,
  handleAction: PropTypes.func,
  isFetching: PropTypes.bool
};

export default ContactUsForm;