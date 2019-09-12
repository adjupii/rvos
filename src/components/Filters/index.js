import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

import Wrapper from './Wrapper';
import Select from './Select';

const FILTERS = {
  select: Select
};

const Filters = ({
  filters,
  filtersData,
  ...restProps
}) => (
  <Styled className="c-filters">
    {
      filters.map((
        {
          type,
          paramName,
          ...filter
        },
        index
      ) => {
        const filterComponent = FILTERS[type];

        return (
          <Wrapper
            key={index}
            component={filterComponent}
            filterData={filtersData[paramName]}
            paramName={paramName}
            {...restProps}
            {...filter}
          />
        );
      })
    }
  </Styled>
);

Filters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object),
  filtersData: PropTypes.object,
  data: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func
};

export default Filters;