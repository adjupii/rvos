import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles.js';

import Download from 'app/components/common/Download';

const Form = ({
  fileType,
  downloadUri,
  fileName,
  fileDesc
}) => (
  <Styled className="claim-form">
    <div className="claim-form__head">
      <div className="claim-form__file-type">
        {fileType}
      </div>

      <Download uri={downloadUri} />
    </div>

    <div className="claim-form__content">
      <div className="claim-form__file-name">
        {fileName}
      </div>

      <div className="claim-form__file-desc">
        {fileDesc}
      </div>
    </div>
  </Styled>
);

Form.propTypes = {
  fileType: PropTypes.string,
  downloadUri: PropTypes.string,
  fileName: PropTypes.string,
  fileDesc: PropTypes.string
};

export default Form;