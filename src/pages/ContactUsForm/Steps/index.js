import React from 'react';

import Steps from 'app/components/Steps';
import Step from 'app/components/Steps/Step';

import Topics from './Topics';
import Request from 'app/components/Forms/ContactUs/Step2';
import Contact from 'app/components/Forms/ContactUs/Step3';

const NewRequestSteps = ({
  user,
  ...props
}) => (
  <Steps {...props}>
    <Step
      title="Choose a topic"
      component={Topics}
    />

    <Step
      title="Your request"
      component={Request}
    />

    <Step
      title="Contact"
      component={Contact}
      user={user}
    />

  </Steps>
);

export default NewRequestSteps;