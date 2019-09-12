import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

import Loupe from 'app/components/Icons/Loupe';
import Input from 'app/components/common/Form/Input/BaseInput';
import Close from 'app/components/Icons/Close';

const FAQSearchField = ({
  handleChangePage,
  setSearchValue
}) => {
  const
    [ value, setValue ] = useState(''),

    handleOnChange = useCallback(
      e => {
        setValue(e.target.value);
      },
      [ setValue ]
    ),

    handleSetSearchValue = useCallback(
      () => {
        setSearchValue(value);
      },
      [ setSearchValue, value ]
    ),

    handleOnKeyDown = useCallback(
      e => {
        if (e.key === 'Enter') {
          handleSetSearchValue(value);
        }
      },
      [ handleSetSearchValue, value ]
    );

  return (
    <Styled className="c-faq-search-field">
      <Loupe
        width="15"
        height="15"
        onClick={handleSetSearchValue}
        className="c-loupe--faq-search"
      />

      <Input
        value={value}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        className="c-input--faq-search"
      />

      <Close
        width="24"
        height="24"
        onClick={handleChangePage('faq-result')}
        className="c-close--faq-search"
      />
    </Styled>
  );
};

FAQSearchField.propTypes = {
  handleChangePage: PropTypes.func,
  setSearchValue: PropTypes.func
};

export default FAQSearchField;