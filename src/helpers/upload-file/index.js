import { format } from 'bytes';

const validate = (file, rules) => {
  const {
    maxSize
  } = rules;

  if (file.size > maxSize) {
    return `Sorry, file size must be less than ${format(maxSize)}`;
  }

  return undefined;
};

const serializeFiles = (
  acceptedFiles,
  rejectedFiles,
  filesLength,
  rules
) => (
  [
    ...acceptedFiles,
    ...rejectedFiles
  ].reduce((obj, file, i) => {
    obj[filesLength + i] = {
      fileName: file.name,
      status: 0
    };

    if (i > (acceptedFiles.length - 1)) {
      obj[filesLength + i].error = validate(file, rules);
    }
    
    return obj;
  }, {})
);

export {
  serializeFiles
};