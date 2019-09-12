import {
  compose,
  defaultProps,
  withHandlers,
  withStateHandlers
} from 'recompose';

import { serializeFiles } from 'app/helpers/upload-file';

export default compose(
  defaultProps({
    multiple: true
  }),

  withStateHandlers(
    {
      files: {},
      uploadedCount: 0
    },

    {
      setFiles: ({ files }) => (droppedFiles, multiple) => {
        if (multiple) {
          return {
            files: {
              ...files,
              ...droppedFiles
            }
          };
        }

        return {
          files: droppedFiles
        };
      },

      clearFiles: () => () => {
        return {
          files: {},
          uploadedCount: 0
        };
      },

      setUploadedCount: ({ uploadedCount }) => count => {
        return {
          uploadedCount: uploadedCount + count
        };
      },

      setStatus: ({ files }) => (fileIndex, status, error) => {
        return {
          files: {
            ...files,
            [fileIndex]: {
              ...files[fileIndex],
              status,
              error
            }
          }
        };
      }
    }
  ),

  withHandlers({
    handleDrop: ({
      files,
      setFiles,
      setStatus,
      setUploadedCount,
      action,
      cb,
      minSize,
      maxSize,
      multiple,
    }) => (
      acceptedFiles,
      rejectedFiles
    ) => {
      const
        filesLength = multiple ? Object.keys(files).length : 0,
        serializedFiles = serializeFiles(
          acceptedFiles,
          rejectedFiles,
          filesLength,
          {
            minSize,
            maxSize
          }
        );

      setFiles(serializedFiles, multiple);

      if (acceptedFiles.length) {
        const promises = acceptedFiles.map((file, i) => (
          action(
            file,
            filesLength + i,
            (fileIndex, status, error) => {
              setStatus(
                fileIndex,
                status,
                error
              );
            }
          ).catch(() => undefined)
        ));

        Promise.all(promises)
          .then(responses => {
            if (multiple) {
              const uploadedCount = (
                responses
                  .filter(res => res !== undefined)
                  .length
              );

              setUploadedCount(uploadedCount);
            }

            if (typeof cb === 'function') {
              cb();
            }
          });
      }
    }
  })
);