import { useMemo } from 'react';

const useData = (data, offset) => (
  useMemo(
    () => {
      if (!offset) {
        return data;
      }

      return data.slice(0, offset);
    },
    [ data, offset ]
  )
);

export {
  useData
};