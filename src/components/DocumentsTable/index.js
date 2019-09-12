import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'qs';

import { getToken } from 'app/cookies';
import {
  date,
  fileType,
  fileName
} from 'app/format';

import TableList from 'app/components/TableList';
import TextTruncated from 'app/components/common/TextTruncated';
import Download from 'app/components/common/Download';

const DocumentsTable = ({
  data,
  ...restProps
}) => (
  <TableList
    renderAs="columns-with-icon"
    iconName="File"
    className="columns-with-icon--documents"
    data={data}
    {...restProps}
  />
);

DocumentsTable.defaultProps = {
  columns: [
    {
      title: 'Date',
      getValue: ({
        fields: {
          custDocumentEffectiveDate
        } = {}
      }) => date(custDocumentEffectiveDate.value),
      colClassName: 'col-9 col-s-4 col-m-3 date'
    },
    {
      title: 'Document',
      accessor: 'fields.custDescription.value',
      getValue: rowData => {
        const
          {
            fields: {
              custDescription
            } = {},
            fileName: name
          } = rowData,

          documentName = custDescription.value || fileName(name);

        return (
          <TextTruncated
            title={documentName}
            className="text-truncated--document-name"
          >
            {documentName}
          </TextTruncated>
        );
      },
      colClassName: 'col-12 col-s-6 col-m-5 col-xl-6 document'
    },
    {
      title: 'Type',
      getValue: ({ fileName }) => fileType(fileName),
      colClassName: 'col-2 type'
    },
    {
      title: 'Download',
      render: rowData => {
        const { downloadUri } = rowData;

        const params = queryString.stringify(
          { bearer: getToken() },
          { addQueryPrefix: true }
        );

        const uri = `${downloadUri}${params}`;

        return <Download uri={uri} />;
      },
      colClassName: 'col-3 col-s-2 col-xl-1 download'
    }
  ]
};

DocumentsTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default DocumentsTable;