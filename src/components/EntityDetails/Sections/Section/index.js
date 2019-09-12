import React from 'react';

import { Col } from 'app/components/common/Grid';
import EntityDetailsInfo from 'app/components/EntityDetails/Info';

const Section = ({
  section: {
    value: sectionValue,
    getValue,
    label,
    indents,
    colClassName,
    ...section
  },
  data
}) => {
  const value =
    typeof getValue === 'function' 
      ? getValue(sectionValue, data)
      : sectionValue;

  return (
    <Col className={colClassName}>
      <EntityDetailsInfo
        value={value}
        label={label}
        indents={indents}
        {...section}
      />
    </Col>
  );
};

export default Section;