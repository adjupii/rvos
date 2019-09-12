export const getScenario = (nextPayment, balance, pastDue) => {
  if (
    nextPayment === undefined
    || balance === undefined
  ) {
    return undefined;
  }

  if (pastDue) {
    return 'scenario-4';
  }

  if (nextPayment === 0 && balance === 0) {
    return 'scenario-1';
  }

  if (nextPayment === 0 && balance > 0) {
    return 'scenario-2';
  }

  if (nextPayment > 0 && balance > 0) {
    return 'scenario-3';
  }
};

export const validateAccount = scenario => (
  scenario
  && scenario !== 'scenario-1'
);

export const isPastDueAccount = scenario => (
  scenario === 'scenario-4'
);