import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { useItems } from './logic';

import Filter from 'app/components/Layouts/App/Filter';
import Select from 'app/components/Select';

const FilterSelect = ({
  data,
  filterData,
  paramName,
  pivot = {},
  onChange
}) => {
  const
    [ selected, setSelected ] = useState(''),

    items = useItems(filterData, pivot),

    handleChange = useCallback(
      id => {
        const filteredData = id ? filterData[id] : data;

        setSelected(id);

        onChange(
          filteredData,
          { [paramName]: id }
        );
      },
      [
        filterData,
        data,
        onChange,
        paramName
      ]
    );

  return (
    <Filter>
      <Select
        selected={selected}
        onChange={handleChange}
        items={items}
      />
    </Filter>
  );
};

FilterSelect.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  filterData: PropTypes.object,
  paramName: PropTypes.string,
  pivot: PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.string
  }),
  onChange: PropTypes.func
};

export default FilterSelect;