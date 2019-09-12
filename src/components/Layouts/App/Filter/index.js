import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

import FilterIcon from 'app/components/Icons/Filter';

const Filter = ({
  children
}) => (
  <Styled className="l-filter">
    <FilterIcon
      width="16"
      height="15"
      className="l-filter__icon"
    />

    {children}
  </Styled>
);

Filter.propTypes = {
  children: PropTypes.node
};

export default Filter;