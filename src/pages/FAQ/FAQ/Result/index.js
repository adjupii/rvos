import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { getQuestions } from 'app/api/common-questions';

import { useCategoriesForSelect } from './logic';
import { useApi } from 'app/hooks/api';

import Styled from './styles';

import Filter from 'app/components/Layouts/App/Filter';
import Select from 'app/components/Select';
import Loupe from 'app/components/Icons/Loupe';
import Loader from 'app/components/common/Loader';
import Item from '../Item';
import Notify from 'app/components/Notify';
import { Link } from 'app/components/common/Button';

const FAQResult = ({
  categories,
  handleChangePage
}) => {
  const
    categoriesForSelect = useCategoriesForSelect(categories),

    [ category, setCategory ] = useState(null),

    api = useCallback(
      () => getQuestions({ category }),
      [ category ]
    ),

    [ fetching, questions ] = useApi(api),

    handleSelect = useCallback(
      id => {
        setCategory(id);
      },
      [ setCategory ]
    );

  return (
    <Styled className="l-faq-result">
      <div className="l-faq-result__inner">
        <div className="l-faq-result__head">
          <Filter>
            <Select
              selected={category}
              onChange={handleSelect}
              items={categoriesForSelect}
              dropdownClassName="c-dropdown--faq-filter"
            />
          </Filter>

          <Loupe
            width="15"
            height="15"
            onClick={handleChangePage('faq-search')}
            className="c-loupe--faq-search"
          />
        </div>

        {
          fetching
            ? <Loader />
            : questions && questions.length
              ? (
                questions.map((question, i) => (
                  <Item
                    key={i}
                    data={question}
                  />
                ))
              )
              : null
        }
      </div>

      <Notify>
        <div className="c-notify__text">
          Can’t find what you need, or have some feedback?
        </div>

        <Link to="/app/contact-us">
          CONTAC US
        </Link>
      </Notify>
    </Styled>
  );
};

FAQResult.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  handleChangePage: PropTypes.func
};

export default FAQResult;