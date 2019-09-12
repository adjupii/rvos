import { useMemo } from 'react';

const useItems = (data, pivot) => (
  useMemo(
    () => {
      const serializeItems = (
        Object.keys(data).map(key => ({
          id: key,
          value: key
        }))
      );

      return [
        { ...pivot },
        ...serializeItems
      ];
    },
    [ data, pivot ]
  )
);

export {
  useItems
};