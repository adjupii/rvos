import React from 'react';

import Steps from 'app/components/Steps';
import Step from 'app/components/Steps/Step';
import Step1 from 'app/components/Forms/MakePayment/Step1';
import Step2 from 'app/components/Forms/MakePayment/Step2';
import Step3 from 'app/components/Forms/MakePayment/Step3';
import PaymentInfo from './PaymentInfo';

const MakePaymentSteps = ({
  accounts,
  account,
  setAccountNumber,
  scenario,
  user,
  ...props
}) => (
  <Steps {...props}>
    <Step
      title="Account information"
      component={Step1}
      accounts={accounts}
      account={account}
      setAccountNumber={setAccountNumber}
      scenario={scenario}
    />

    <Step
      title="How much would you like to pay?"
      component={Step2}
      account={account}
      scenario={scenario}
    />

    <Step
      title="Email for payment confirmation"
      component={Step3}
      user={user}
    />

    <Step
      title="Payment information"
      component={PaymentInfo}
    />
  </Steps>
);

export default MakePaymentSteps;