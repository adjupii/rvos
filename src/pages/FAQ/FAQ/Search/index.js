import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import { getQuestions } from 'app/api/common-questions';

import { useApi } from 'app/hooks/api';

import SearchField from './Field';
import Loader from 'app/components/common/Loader';
import Item from '../Item';
import Card from 'app/components/common/Card';
import NoData from 'app/components/EntityDetails/NoData';

const FAQSearch = ({ handleChangePage }) => {
  const
    [ searchValue, setSearchValue ] = useState(),

    api = useMemo(
      () => {
        if (searchValue) {
          return () => getQuestions({ search: searchValue });
        }

        return undefined;
      },
      [ searchValue ]
    ),

    [ fetching, questions ] = useApi(api);

  return (
    <>
      <SearchField
        handleChangePage={handleChangePage}
        setSearchValue={setSearchValue}
      />

      {
        fetching
          ? <Loader />
          : questions
            ? questions.length
              ? (
                questions.map((question, i) => (
                  <Item
                    key={i}
                    data={question}
                  />
                ))
              )
              : (
                <Card>
                  <NoData iconName="Sandglass">
                    Sorry, no results were found. Please try adjusting your search.
                  </NoData>
                </Card>
              )
            : null
      }
    </>
  );
};

FAQSearch.propTypes = {
  handleChangePage: PropTypes.func
};

export default FAQSearch;