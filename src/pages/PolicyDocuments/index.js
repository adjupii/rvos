import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { getPolicy } from 'app/api/policies';
import { getDocuments } from 'app/api/documents';
import { getQuestions } from 'app/api/common-questions';
import { getQuickLinks } from 'app/api/quick-links';

import { useApi } from 'app/hooks/api';

import Breadcrumbs from 'app/components/Breadcrumbs';
import Loader from 'app/components/common/Loader';
import PolicyDocuments from './PolicyDocuments';

const PolicyDocumentsContainer = ({
  match: {
    params: { policyNumber }
  }
}) => {
  const
    api = useCallback(
      () => (
        Promise.all([
          getPolicy(policyNumber),
          getDocuments(
            'policy',
            { query: [ `custPolicyNumber=${policyNumber}` ] }
          ),
          getQuickLinks('policy_documents'),
          getQuestions({ 'block_name': 'policy_documents' })
        ])
      ),
      [ policyNumber ]
    ),

    [ fetching, data ] = useApi(api);

  return (
    <>
      <Breadcrumbs
        page="policies"
        title="POLICY DOCUMENTS"
      />

      {
        fetching
          ? <Loader />
          : data
            ? (
              <PolicyDocuments
                policyNumber={policyNumber}
                policy={data[0].policy}
                documents={data[1]}
                quickLinks={data[2]}
                questions={data[3]}
              />
            )
            : null
      }
    </>
  );
};

PolicyDocumentsContainer.propTypes = {
  match: PropTypes.object
};

export default PolicyDocumentsContainer;