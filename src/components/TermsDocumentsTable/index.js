import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DocumentsTable from 'app/components/DocumentsTable';

import Styled from './styles';

const TermsDocumentsTable = ({
  data = []
}) => (
  <Styled
    className={
      classNames(
        'terms-documents-table',
        { 'terms-documents-table--no-data': !data.length }
      )
    }
  >
    {
      data.length
        ? <DocumentsTable data={data} />
        : 'No documents found'
    }
  </Styled>
);

TermsDocumentsTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default TermsDocumentsTable;