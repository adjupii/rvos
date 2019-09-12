import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { useApi } from 'app/hooks/api';

import { getDocuments } from 'app/api/documents';

import Loader from 'app/components/common/Loader';
import TitleWithIcon from 'app/components/EntityDetails/TitleWithIcon';
import DocumentsTable from 'app/components/DocumentsTable';

const Documents = ({
  id,
  idType,
  uploadedCount
}) => {
  const
    api = useCallback(
      () => (
        getDocuments(
          'claims',
          {
            query: [
              `${idType === 'fnolNumber' ? 'custFnolNumber' : 'custClaimNumber'}=${id}`
            ]
          }
        )
      ),
      [ id, idType ]
    ),

    [ fetching, data ] = useApi(api, [ uploadedCount ]);

  return (
    <TitleWithIcon
      value="Claim Documents"
      iconName="Files"
      className="title-with-icon--claim-documents"
    >
      {
        fetching
          ? <Loader />
          : data
            ? data.length
              ? <DocumentsTable data={data} />
              : 'No documents found'
            : null
      }
    </TitleWithIcon>
  );
};

Documents.propTypes = {
  id: PropTypes.string,
  idType: PropTypes.string,
  uploadedCount: PropTypes.number
};

export default Documents;