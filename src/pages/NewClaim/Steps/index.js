import React from 'react';

import Steps from 'app/components/Steps';
import Step from 'app/components/Steps/Step';

import WhatHappened from './WhatHappened';
import Step2 from 'app/components/Forms/NewClaim/Step2';
import Policy from './Policy';
import WhereHappened from './WhereHappened';
import Step5 from 'app/components/Forms/NewClaim/Step5';
import Step6 from 'app/components/Forms/NewClaim/Step6';

const NewClaimSteps = ({
  user,
  ...props
}) => (
  <Steps {...props}>
    <Step
      title="What happened?"
      component={WhatHappened}
    />

    <Step
      title="When did it happen?"
      component={Step2}
    />

    <Step
      title="Policy"
      component={Policy}
    />

    <Step
      title="Where it happened?"
      component={WhereHappened}
    />

    <Step
      title="Contact person"
      component={Step5}
      user={user}
    />

    <Step
      title="Details"
      component={Step6}
    />
  </Steps>
);

export default NewClaimSteps;