import React, { useCallback } from 'react';

import { useApi } from 'app/hooks/api';
import { getPolicies } from 'app/api/policies';
import { getQuestions } from 'app/api/common-questions';
import { getQuickLinks } from 'app/api/quick-links';

import Loader from 'app/components/common/Loader';
import Breadcrumbs from 'app/components/Breadcrumbs';
import Documents from './Documents';

const DocumentsContainer = () => {
  const
    api = useCallback(
      () => (
        Promise.all([
          getPolicies(),
          getQuestions({ 'block_name': 'policy_documents' }),
          getQuickLinks('policy_documents'),
        ])
      ),
      []
    ),

    [ fetching, data ] = useApi(api);

  return (
    <>
      <Breadcrumbs
        page="documents"
        title="DOCUMENTS"
      />

      {
        fetching
          ? <Loader />
          : (
            data
              ? (
                <Documents
                  policies={data[0]}
                  questions={data[1]}
                  quickLinks={data[2]}
                />
              )
              : null
          )
      }
    </>
  );
};

export default DocumentsContainer;