import React from 'react';
import PropTypes from 'prop-types';

import Card from 'app/components/common/Card';
import H2 from 'app/components/Layouts/App/H2';
import Agent from 'app/components/Agent';

const PolicyAgent = ({
  agent
}) => (
  <>
    <H2 className="c-app-h2--policy-agent">
      My Agent
    </H2>

    <Card>
      <Agent agent={agent} />
    </Card>
  </>
);

PolicyAgent.propTypes = {
  agent: PropTypes.object
};

export default PolicyAgent;