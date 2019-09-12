import { useMemo } from 'react';

const useStatesForSelect = states => (
  useMemo(
    () => (
      states.map(({
        isoCode,
        fullName
      }) => ({
        id: isoCode,
        value: fullName
      }))
    ),
    [ states ]
  )
);

export {
  useStatesForSelect
};