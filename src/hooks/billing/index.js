import { useMemo } from 'react';
import keyBy from 'lodash/keyBy';
import groupBy from 'lodash/groupBy';
import getYear from 'date-fns/get_year';

import { getTerms } from 'app/helpers/billing';

const BILLING_TYPES = {
  BILLED_TO_MORTGAGEE: 'Billed to Mortgagee',
  PAID_IN_FULL: 'Paid in Full'
};

import { joinedText } from 'app/format';

const useAccountsGrouped = accounts => (
  useMemo(
    () => keyBy(accounts, 'accountNumber'),
    [ accounts ]
  )
);

const useBillingGroupedByPolicyNo = accounts => (
  useMemo(
    () => keyBy(accounts, 'policyNo'),
    [ accounts ]
  )
);

const useAccountsForSelect = accounts => (
  useMemo(
    () => (
      accounts.map(({
        accountNumber,
        accountName
      }) => ({
        id: accountNumber,
        value: (
          joinedText(
            [
              accountName,
              accountNumber
            ],
            {
              sep: ' | '
            }
          )
        )
      }))
    ),
    [ accounts ]
  )
);

const useAccountActions = (accountNumber, withActions) => (
  useMemo(
    () => {
      if (withActions) {
        return [
          {
            to: `/app/billing/${accountNumber}/documents`,
            children: 'View documents'
          }
        ];
      }

      return [];
    },
    [ accountNumber, withActions ]
  )
);

const useAccountType = (billToType, remainingBalance) => (
  useMemo(
    () => {
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
    },
    [ billToType, remainingBalance ]
  )
);

const useAccountCardBillet = location => (
  useMemo(
    () => {
      switch (location) {
        case 'dashboard':
        case 'dashboard-half':
          return {
            color: 'gradient-4',
            position: 'left'
          };

        case 'billing-center':
          return {
            color: 'entity-billingCenter',
            position: 'top'
          };

        default:
          return {};
      }
    },
    [ location ]
  )
);

const useItemsForAccountChart = data => (
  useMemo(
    () => {
      const
        {
          remainingBalance,
          pastDuePayment,
          total
        } = data,

        paidBalance = (
          remainingBalance > 0 && (total - remainingBalance)
          || total
        ),

        items = [
          {
            value: paidBalance,
            className: 'paid-balance'
          }
        ];

      if (pastDuePayment > 0) {
        items.push({
          value: pastDuePayment,
          className: 'past-due-balance'
        });
      }

      return items;
    },
    [ data ]
  )
);

const usePaymentAmountDueLabel = paymentMethod => (
  useMemo(
    () => {
      if (paymentMethod === 'EFT') {
        return 'Next payment withdrawal amount';
      }

      return 'Payment Amount Due';
    },
    [ paymentMethod ]
  )
);

const useNextPaymentDateLabel = paymentMethod => (
  useMemo(
    () => {
      if (paymentMethod === 'EFT') {
        return 'Payment Withdraw Date';
      }

      return 'Payment Due Date';
    },
    [ paymentMethod ]
  )
);

const useDocumentsWithTerms = documents => (
  useMemo(
    () => {
      const
        terms = getTerms(),

        groupedDocumentsByDate = groupBy(
          documents,
          value => getYear(value.fields.custDocumentEffectiveDate.value)
        );

      return (
        terms.reduce((obj, term, i) => {
          if (
            i === terms.length - 1
            || groupedDocumentsByDate[term]
          ) {
            obj[term] = groupedDocumentsByDate[term];
          }

          return obj;
        }, {})
      );
    },
    [ documents ]
  )
);

export {
  useAccountsGrouped,
  useAccountsForSelect,
  useAccountActions,
  useAccountType,
  useAccountCardBillet,
  useItemsForAccountChart,
  useBillingGroupedByPolicyNo,
  usePaymentAmountDueLabel,
  useNextPaymentDateLabel,
  useDocumentsWithTerms,
  BILLING_TYPES
};