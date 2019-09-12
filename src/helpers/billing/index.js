import { getYear } from 'date-fns';

const BILLING_TYPES = {
  BILLED_TO_MORTGAGEE: 'Billed to Mortgagee',
  PAID_IN_FULL: 'Paid in Full'
};

const getBillingType = (billToType, remainingBalance) => {
  if (
    billToType === undefined
    || remainingBalance === undefined
  ) {
    return undefined;
  }

  if (billToType === 'MORTGAGEE') {
    return BILLING_TYPES.BILLED_TO_MORTGAGEE;
  }

  if (remainingBalance <= 0) {
    return BILLING_TYPES.PAID_IN_FULL;
  }

  return undefined;
};

const getNextPaymentDateLabel = paymentMethod => {
  if (paymentMethod === 'EFT') {
    return 'Payment Withdraw Date';
  }

  return 'Payment Due Date';
};

const getTerms = () => {
  const currentYear = getYear(new Date());

  return [
    currentYear - 2,
    currentYear - 1,
    currentYear
  ];
};

export {
  BILLING_TYPES,
  getBillingType,
  getNextPaymentDateLabel,
  getTerms
};

