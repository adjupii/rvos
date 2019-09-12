import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { useTermsForSelect } from 'app/hooks/policies';

import Select from 'app/components/Select';

const Terms = ({
  selected,
  onChange,
  terms
}) => {
  const
    handleChange = useCallback(
      id => {
        onChange(id);
      },
      [ onChange ]
    ),

    items = useTermsForSelect(terms);

  return (
    <Select
      selected={selected}
      onChange={handleChange}
      items={items}
      className="c-select--policy-terms"
      dropdownClassName="c-dropdown--policy-terms"
    />
  );
};

Terms.propTypes = {
  selected: PropTypes.string,
  onChange: PropTypes.func,
  currentTermIndex: PropTypes.number,
  terms: PropTypes.arrayOf(PropTypes.object)
};

export default Terms;