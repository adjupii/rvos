import React from 'react';

import Styled from './styles';

import Upload from 'app/components/Icons/Upload';

const Zone = () => (
  <Styled className="dropzone__zone">
    <Upload
      width="16"
      height="16"
      className="dropzone__icon"
    />

    UPLOAD YOUR FILES HERE
  </Styled>
);

export default Zone;