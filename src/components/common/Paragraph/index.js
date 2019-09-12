import React from 'react';

import { Text } from 'app/components/common/styled';

const Paragraph = props => (
  <Text
    as="p"
    {...props}
  />
);

Paragraph.defaultProps = {
  m: 0
};

export default Paragraph;