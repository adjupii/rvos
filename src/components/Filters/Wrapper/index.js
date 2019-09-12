import React from 'react';

const FilterWrapper = ({
  show,
  component: Component,
  filterData,
  ...restProps
}) => {
  if (
    typeof show === 'function'
    && !show(filterData)
  ) {
    return null;
  }

  return (
    <Component
      filterData={filterData}
      {...restProps}
    />
  );
};

export default FilterWrapper;