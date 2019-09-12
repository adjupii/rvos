import addYears from 'date-fns/add_years';

import { BILLING_TYPES } from 'app/helpers/billing';
import {
  currency,
  date
} from 'app/format';

const getRemainingBalance = (billingType, remainingBalance = 0) => (
  billingType || currency(remainingBalance)
);

const getRemainingBalanceLabel = billingType => {
  if (billingType === BILLING_TYPES.BILLED_TO_MORTGAGEE) {
    return 'Payment';
  }

  return 'Remaining Balance';
};

const getPolicyActions = (status, policyNumber) => ([
  {
    to: '/app/claims/claim/create',
    children: 'New claim',
    className: 'new-claim'
  },
  {
    to: `/app/policies/${policyNumber}/update`,
    children: 'Update policy',
    className: `update-policy update-policy--${status}`
  },
  {
    to: `/app/policies/${policyNumber}/documents`,
    children: 'View documents',
    className: 'view-documents'
  }
]);

const getTerms = (policy, format) => {
  const {
    beginDate,
    endDate
  } = policy;

  return [
    [
      date(addYears(beginDate, -1), format),
      date(addYears(endDate, -1), format)
    ],
    [
      date(beginDate, format),
      date(endDate, format)
    ],
    [
      date(addYears(beginDate, 1), format),
      date(addYears(endDate, 1), format)
    ]
  ];
};

const getTermName = type => {
  switch (type) {
    case 'past':
      return 'Past Term';

    case 'current':
      return 'Current Term';

    case 'future':
      return 'Future Term';

    default:
      return '';
  }
};

export {
  getRemainingBalance,
  getRemainingBalanceLabel,
  getPolicyActions,
  getTerms,
  getTermName
};