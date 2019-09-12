import { useMemo } from 'react';

const useBankAccTypesForSelect = types => (
  useMemo(
    () => (
      Object.keys(types).map(id => ({
        id,
        value: types[id]
      }))
    ),
    [ types ]
  )
);

export {
  useBankAccTypesForSelect
};