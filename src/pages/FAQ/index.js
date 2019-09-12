import React, { useCallback } from 'react';

import { getQuestionsCategories } from 'app/api/common-questions';
import { getQuickLinks } from 'app/api/quick-links';

import { useApi } from 'app/hooks/api';

import Breadcrumbs from 'app/components/Breadcrumbs';
import Loader from 'app/components/common/Loader';
import FAQ from './FAQ';

const FAQContainer = () => {
  const
    api = useCallback(
      () => (
        Promise.all([
          getQuestionsCategories(),
          getQuickLinks()
        ])
      ),
      []
    ),

    [ fetching, data ] = useApi(api);

  return (
    <>
      <Breadcrumbs
        page="commonQuestions"
        title="COMMON QUESTIONS"
      />

      {
        fetching
          ? <Loader />
          : data
            ? (
              <FAQ
                categories={data[0]}
                quickLinks={data[1]}
              />
            )
            : null
      }
    </>
  );
};

export default FAQContainer;