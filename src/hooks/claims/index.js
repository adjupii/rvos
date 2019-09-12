import { useMemo } from 'react';
import keyBy from 'lodash/keyBy';
import groupBy from 'lodash/groupBy';
import addYears from 'date-fns/add_years';
import isWithinRange from 'date-fns/is_within_range';

import { getClaimStatus } from 'app/helpers/claim';
import {
  joinedText,
  zipCode
} from 'app/format';

const useClaims = (claims, status) => useMemo(
  () => (
    claims.filter(claim => getClaimStatus(claim.status) === status)
  ),
  [ claims, status ]
);

const useClaimsGroupedByPolicyNo = claims => (
  useMemo(
    () => groupBy(claims, 'policyNumber'),
    [ claims ]
  )
);

const useClaimsWithinLastYear = claims => useMemo(
  () => {
    const
      today = new Date(),

      todayMinusYear = addYears(today, -1);

    return (
      claims.filter(claim => (
        isWithinRange(claim.closedDate, todayMinusYear, today)
      ))
    );
  },
  [ claims ]
);

const useTotalAmount = payments => (
  useMemo(
    () => (
      payments.reduce(
        (total, payment) => total + payment.amount,
        0
      )
    ),
    [ payments ]
  )
);

const useClaimTypesGrouped = types => (
  useMemo(
    () => keyBy(types, value => `claimType-${value.id}`),
    [ types ]
  )
);

const useClaimLocationsForSelect = locations => (
  useMemo(
    () => {
      const policyLocations = locations.map(({
        code,
        name,
        address: {
          street,
          city,
          state: { fullName },
          postalCode
        }
      }) => {
        const address = joinedText([
          street,
          city,
          fullName,
          zipCode(postalCode)
        ]);

        return {
          id: code,
          value: `${name ? `${name} (` : ''}${address}${name ? ')' : ''}`
        };
      });

      return [
        ...policyLocations,
        {
          id: 'lossDiff',
          value: 'Other location'
        }
      ];
    },
    [ locations ]
  )
);

export {
  useClaims,
  useClaimsGroupedByPolicyNo,
  useClaimsWithinLastYear,
  useTotalAmount,
  useClaimTypesGrouped,
  useClaimLocationsForSelect
};