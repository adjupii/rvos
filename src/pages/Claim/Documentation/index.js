import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { parse } from 'bytes';

import { useCounter } from 'app/hooks/counter';

import { fileType } from 'app/format';

import { uploadDocument } from 'app/api/claims';

import {
  Row,
  Col
} from 'app/components/common/Grid';
import TitleWithIcon from 'app/components/EntityDetails/TitleWithIcon';
import Text from './Text';
import Dropzone from 'app/components/common/Dropzone';
import Documents from './Documents';
import Form from './Form';
import Form1 from 'app/files/claim-forms/Property Loss Inventory Worksheet.pdf';
import Form2 from 'app/files/claim-forms/Home Inventory Worksheet.pdf';
import Form3 from 'app/files/claim-forms/Lightning Loss Affidavit.pdf';

const Documentation = ({
  id,
  idType
}) => {
  const {
    morales_file_extensions: {
      fields: fileTypes = []
    } = {},
    morales_file_max_size = {}
  } = useSelector(state => state.user.data.settings);

  const {
    count,
    incrementCounter
  } = useCounter();

  const handleUploadDocument = useCallback(
    (file, fileIndex, setStatus) => (
      uploadDocument(
        file,
        fileIndex,
        {
          idType,
          id
        },
        setStatus
      )
    ),
    [ id, idType ]
  );

  return (
    <>
      <TitleWithIcon
        value="Upload files"
        iconName="FileUpload"
        className="title-with-icon--claim-upload-files"
      >
        <Text>
          Upload documents or pictures which provide additional details of your claim
        </Text>

        <Text>
          {`Supported file types: ${fileTypes.join(', ')}`}
        </Text>

        <Dropzone
          action={handleUploadDocument}
          cb={incrementCounter}
          maxSize={parse(`${morales_file_max_size.value}MB`)}
        />
      </TitleWithIcon>

      <Documents
        id={id}
        idType={idType}
        uploadedCount={count}
      />

      <TitleWithIcon
        iconName="FileWithList"
        value="Claim Forms Available for Download"
      >
        <Text>
          The following forms are available to help you in the claims process:
        </Text>

        <Row>
          <Col className="col-12 col-m-6 col-xl-4">
            <Form
              fileType={fileType(Form1)}
              downloadUri={Form1}
              fileName="Property Loss Inventory Worksheet"
              fileDesc="Use this worksheet to inventory property and content losses."
            />
          </Col>

          <Col className="col-12 col-m-6 col-xl-4">
            <Form
              fileType={fileType(Form2)}
              downloadUri={Form2}
              fileName="Home Inventory Worksheet"
              fileDesc="Use this worksheet to record the contents of your house."
            />
          </Col>

          <Col className="col-12 col-m-6 col-xl-4">
            <Form
              fileType={fileType(Form3)}
              downloadUri={Form3}
              fileName="Lightning Loss Affidavit"
              fileDesc="This affidavit is filled out by a service provider who inspects a property and certifies lightning damage as the sole source of the loss."
            />
          </Col>
        </Row>
      </TitleWithIcon>
    </>
  );
};

Documentation.propTypes = {
  id: PropTypes.string,
  idType: PropTypes.string
};

export default Documentation;