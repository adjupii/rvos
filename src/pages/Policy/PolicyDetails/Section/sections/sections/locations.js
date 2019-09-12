import React from 'react';

import {
  joinedText,
  zipCode
} from 'app/format';

import TitleWithIcon from 'app/components/EntityDetails/TitleWithIcon';
import TableList from 'app/components/TableList';

const COLUMNS = [
  {
    title: 'Type',
    getValue: ({ dwellingType }) => dwellingType,
    className: 'td--color-lightgray',
    width: '200px'
  },
  {
    title: 'Name',
    getValue: ({ propertyName }) => propertyName,
    className: 'td--bold',
    width: '200px'
  },
  {
    title: 'Address',
    getValue: ({
      address: {
        street,
        additional,
        city,
        state,
        postalCode
      }
    }) => joinedText(
      [
        street,
        additional,
        city,
        `${state.abbreviation} ${zipCode(postalCode)}`
      ]
    ),
    className: 'td--color-lightgray'
  }
];

export default {
  locations: props => (
    <TitleWithIcon
      iconName="HouseLocation"
      value="Locations"
    >
      <TableList
        columns={COLUMNS}
        {...props}
      />
    </TitleWithIcon>
  )
};