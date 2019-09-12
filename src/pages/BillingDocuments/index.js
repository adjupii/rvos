import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { getDocuments } from 'app/api/documents';
import { getQuickLinks } from 'app/api/quick-links';
import { getQuestions } from 'app/api/common-questions';

import { useApi } from 'app/hooks/api';

import Breadcrumbs from 'app/components/Breadcrumbs';
import Loader from 'app/components/common/Loader';
import BillingDocuments from './BillingDocuments';

const BillingDocumentsContainer = ({
  match: {
    params: { accountNumber }
  }
}) => {
  const
    api = useCallback(
      () => (
        Promise.all([
          getDocuments(
            'billing',
            { query: [ `custAccountNumber=${accountNumber}` ] }
          ),
          getQuickLinks('billing_documents'),
          getQuestions({ 'block_name': 'billing_documents' })
        ])
      ),
      [ accountNumber ]
    ),

    [ fetching, data ] = useApi(api);

  return (
    <>
      <Breadcrumbs
        page="billingCenter"
        title="BILLING DOCUMENTS"
      />

      {
        fetching
          ? <Loader />
          : data
            ? (
              <BillingDocuments
                accountNumber={accountNumber}
                documents={data[0]}
                quickLinks={data[1]}
                questions={data[2]}
              />
            )
            : null
      }
    </>
  );
};

BillingDocumentsContainer.propTypes = {
  match: PropTypes.object
};

export default BillingDocumentsContainer;