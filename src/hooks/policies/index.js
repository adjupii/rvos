import React, { useMemo } from 'react';
import groupBy from 'lodash/groupBy';

import { period } from 'app/format';
import {
  getTerms,
  getTermName
} from 'app/helpers/policy';

const usePolicies = (policies, statuses, useOverdue = false) => (
  useMemo(
    () => {
      const statuesArr = statuses.split(', ');

      return (
        policies.filter(item => {
          const overdue = useOverdue ? item.overdue : false;

          return !overdue && statuesArr.includes(item.status);
        })
      );
    },
    [
      policies,
      statuses,
      useOverdue
    ]
  )
);

const usePolicyStatus = status => useMemo(
  () => {
    switch (status) {
      case 'active':
      case 'pending_cancel':
        return 'active';

      case 'closed':
      case 'canceled':
        return 'closed';

      default:
        return '';
    }
  },
  [ status ]
);

const useCurrentTerm = terms => (
  useMemo(
    () => {
      const term = terms.find(term => term.isCurrent);

      return term || terms[terms.length - 1];
    },
    [ terms ]
  )
);

const useTermsForSelect = terms => (
  useMemo(
    () => (
      terms.map(term => ({
        id: term.beginDate,
        value: (
          <>
            <div className="term-date">
              {period(term.beginDate, term.endDate)}
            </div>

            <div className="term-type">
              {getTermName(term.type)}
            </div>
          </>
        )
      }))
    ),
    [ terms ]
  )
);

const useDocumentsWithTerms = (documents, policy) => (
  useMemo(
    () => {
      const
        terms = getTerms(policy, 'M/D/YYYY'),

        groupedDocumentsByDate = groupBy(
          documents,
          'fields.custDocumentEffectiveDate.value'
        ),

        documentsWithTerms = (
          terms.reduce((obj, term) => {
            if (groupedDocumentsByDate[term[0]]) {
              obj[term[0]] = groupedDocumentsByDate[term[0]];
            }

            return obj;
          }, {})
        );

      return {
        terms,
        documentsWithTerms
      };
    },
    [ documents, policy ]
  )
);

export {
  usePolicies,
  usePolicyStatus,
  useCurrentTerm,
  useTermsForSelect,
  useDocumentsWithTerms
};