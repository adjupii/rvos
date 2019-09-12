import React from 'react';
import PropTypes from 'prop-types';

import {
  joinedText,
  zipCode
} from 'app/format';

import TitleWithIcon from 'app/components/EntityDetails/TitleWithIcon';
import TableList from 'app/components/TableList';

const Property = ({
  data,
  columns
}) => (
  <TitleWithIcon
    iconName="House"
    value="Property"
    className="title-with-icon--claim-property"
  >
    <TableList
      renderAs="columns"
      columns={columns}
      data={data}
    />
  </TitleWithIcon>
);

Property.defaultProps = {
  columns: [
    {
      title: 'Type',
      getValue: ({ coverageTypeDesc }) => coverageTypeDesc
    },
    {
      title: 'Address',
      getValue: ({
        address: {
          street,
          city,
          state,
          postalCode
        }
      }) => (
        joinedText([
          street,
          city,
          state.abbreviation,
          zipCode(postalCode)
        ])
      )
    }
  ]
};

Property.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object)
};

export default Property;