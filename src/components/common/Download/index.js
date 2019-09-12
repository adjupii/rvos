import React from 'react';
import PropTypes from 'prop-types';

import DownloadIcon from 'app/components/Icons/Download';

const Download = ({
  uri,
  children
}) => (
  <a
    href={uri}
    download
  >
    {
      children
      || (
        <DownloadIcon
          width="24"
          height="24"
        />
      )
    }
  </a>
);

Download.propTypes = {
  uri: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Download;