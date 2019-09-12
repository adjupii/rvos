import React, { Fragment } from 'react';
import BaseDropzone from 'react-dropzone';
import classNames from 'classnames';

import Styled from './styles';

import Zone from './Zone';
import Status from './Status';

const Dropzone = ({
  inputProps,
  handleDrop,
  renderZone,
  renderStatus,
  files,
  disabled,
  clearFiles,
  uploadedCount,
  ...props
}) => (
  <BaseDropzone
    onDrop={handleDrop}
    disabled={disabled}
    {...props}
  >
    {
      ({
        getRootProps,
        getInputProps,
        isDragActive
      }) => (
        <Fragment>
          <Styled
            {...getRootProps({
              className: classNames(
                'dropzone',
                { 'dropzone--is-disabled': disabled }
              )
            })}
          >
            <input
              {...getInputProps({
                ...inputProps
              })}
            />

            {
              typeof renderZone === 'function'
                ? (
                  renderZone({
                    isDragActive,
                  })
                )
                : <Zone />
            }

           
          </Styled>

          {
            typeof renderStatus === 'function'
              ? (
                renderStatus({
                  files
                })
              )
              : (
                Object.keys(files).length
                  ? (
                    <Status
                      files={files}
                      uploadedCount={uploadedCount}
                      onClose={clearFiles}
                    />
                  )
                  : null
              )
          }
        </Fragment>
      )
    }
  </BaseDropzone>
);

export default Dropzone;