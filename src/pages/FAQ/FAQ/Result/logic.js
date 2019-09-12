import { useMemo } from 'react';

const useCategoriesForSelect = categories => (
  useMemo(
    () => {
      const options = (
        categories.map(({ id, label }) => ({
          id,
          value: label
        }))
      );

      return [
        {
          id: null,
          value: 'Show all questions'
        },
        ...options
      ];
    },
    [ categories ]
  )
);

export {
  useCategoriesForSelect
};