import React, { useCallback } from 'react';

import { useApi } from 'app/hooks/api';

import { getPolicies } from 'app/api/policies';
import { getBillingForPolicies } from 'app/api/billing';
import { getClaims } from 'app/api/claims';
import { getQuestions } from 'app/api/common-questions';
import { getQuickLinks } from 'app/api/quick-links';

import Loader from 'app/components/common/Loader';
import Breadcrumbs from 'app/components/Breadcrumbs';
import Policies from './Policies';

const PoliciesContainer = () => {
  const
    api = useCallback(
      () => (
        Promise.all([
          getPolicies(),
          getBillingForPolicies(),
          getClaims(),
          getQuestions({ 'block_name': 'policy' }),
          getQuickLinks('policy')
        ])
      ),
      []
    ),

    [ fetching, data ] = useApi(api);

  return (
    <>
      <Breadcrumbs
        page="policies"
        title="POLICIES"
      />

      {
        fetching ?
          <Loader /> :
          data
            ? (
              <Policies
                policies={data[0]}
                billing={data[1]}
                claims={data[2]}
                questions={data[3]}
                quickLinksList={data[4]}
              />
            ) :
            null
      }
    </>
  );
};

export default PoliciesContainer;