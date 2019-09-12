import React, { useCallback } from 'react';

import { useApi } from 'app/hooks/api';

import { getClaims } from 'app/api/claims';
import { getQuestions } from 'app/api/common-questions';
import { getQuickLinks } from 'app/api/quick-links';

import Breadcrumbs from 'app/components/Breadcrumbs';
import Loader from 'app/components/common/Loader';
import Claims from './Claims';

const ClaimsContainer = () => {
  const
    api = useCallback(
      () => (
        Promise.all([
          getClaims(),
          getQuestions({ 'block_name': 'claims' }),
          getQuickLinks('claims')
        ])
      ),
      []
    ),

    [ fetching, data ] = useApi(api);

  return (
    <>
      <Breadcrumbs
        page="claims"
        title="CLAIMS"
      />

      {
        fetching
          ? <Loader />
          : (
            data
              ? (
                <Claims
                  claims={data[0]}
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

export default ClaimsContainer;