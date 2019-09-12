import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import queryString from 'qs';

import { useApi } from 'app/hooks/api';

import { getClaimDetails } from 'app/api/claims';
import { getQuestions } from 'app/api/common-questions';
import { getQuickLinks } from 'app/api/quick-links';

import Breadcrumbs from 'app/components/Breadcrumbs';
import Loader from 'app/components/common/Loader';
import Claim from './Claim';

const ClaimContainer = ({
  match: {
    params: { id }
  }
}) => {
  const
    { idType } = queryString.parse(
      location.search,
      { ignoreQueryPrefix: true }
    ),

    api = useCallback(
      () => (
        Promise.all([
          getClaimDetails(
            id,
            { idType }
          ),
          getQuestions({ 'block_name': 'claims' }),
          getQuickLinks('claims')
        ])
      ),
      [ id, idType ]
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
                <Claim
                  id={id}
                  idType={idType}
                  claim={data[0]}
                  questions={data[1]}
                  quickLinksList={data[2]}
                />
              )
              : null
          )
      }
    </>
  );
};

ClaimContainer.propTypes = {
  match: PropTypes.object
};

export default ClaimContainer;