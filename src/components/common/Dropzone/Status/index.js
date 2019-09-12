import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

import StatusBar from 'app/components/common/StatusBar';
import Close from 'app/components/Icons/Close';

const Status = ({
  files,
  uploadedCount,
  onClose
}) => (
  <Styled className="upload-status">
    <Close
      width="20"
      height="20"
      className="upload-status__close-icon"
      onClick={onClose}
    />

    <div className="upload-status__uploaded">
      {`UPLOADED ${uploadedCount} OF ${Object.keys(files).length}`}
    </div>

    {
      Object.keys(files).map(fileIndex => {
        const file = files[fileIndex];
    
        return (
          <div
            key={fileIndex}
            className="upload-status__file"
          >
            <div
              title={file.fileName}
              className="upload-status__file-name"
            >
              {file.fileName}
            </div>

            <div className="upload-status__status-holder">
              <div className="upload-status__status-box">
                <StatusBar
                  status={
                    file.error
                    && file.status === 0
                      ? 100
                      : file.status
                  }
                  type={file.error ? 'error' : 'success'}
                />
              </div>

              <div className="upload-status__status">  
                {`${file.status}%`}
              </div>

              {
                file.error && (
                  <div className="upload-status__error">
                    {file.error}
                  </div>
                )
              }
            </div>
          </div>
        );
      })
    }
  </Styled>
);

Status.propTypes = {
  files: PropTypes.object,
  uploadedCount: PropTypes.number,
  onClose: PropTypes.func
};

export default Status;