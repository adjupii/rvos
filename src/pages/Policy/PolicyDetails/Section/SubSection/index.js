import React from 'react';
import PropTypes from 'prop-types';

import TitleWithArrow from 'app/components/EntityDetails/TitleWithArrow';
import TableList from 'app/components/TableList';

const SubSection = ({
  title,
  isOpen,
  data,
  columns
}) => (
  <TitleWithArrow
    title={title}
    initialOpen={isOpen}
    className="title-with-arrow--policy-sub-section"
  >
    <TableList
      columns={columns}
      data={data}
    />
  </TitleWithArrow>
);

SubSection.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object)
};

export default SubSection;