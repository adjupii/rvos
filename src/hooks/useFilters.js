import {
  useState,
  useCallback
} from 'react';

export default data => {
  const [ filters, setFilters ] = useState({
    filteredData: data,
    filters: {}
  });

  const handleFilter = useCallback(
    (data, filter) => {
      setFilters(prevState => ({
        filteredData: data,
        filters: {
          ...prevState.filters,
          ...filter
        }
      }));
    },
    [ setFilters ]
  );

  return [
    filters,
    handleFilter
  ];
};