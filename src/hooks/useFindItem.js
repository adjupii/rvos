import { useMemo } from 'react';

const useFindItem = (items, param, paramName = 'id') => (
  useMemo(
    () => {
      const item = items.find(item => item[paramName] === param);

      return item || {};
    },
    [ items, param, paramName ]
  )
);

export default useFindItem;