import React from 'react';

import {
  joinedText,
  zipCode
} from 'app/format';

import Sections from 'app/components/EntityDetails/Sections';

export default {
  mortgagee: ({
    data,
    ...props
  }) => (
    data.map((
      {
        fullName,
        ...itemData
      },
      index
    ) => (
      <Sections
        key={index}
        title={fullName}
        iconName="Mortgagee"
        sections={[
          {
            label: 'Address',
            valueKey: 'address',
            getValue: ({
              street,
              additional,
              city,
              state,
              postalCode
            }) => joinedText([
              street,
              additional,
              city,
              `${state.abbreviation} ${zipCode(postalCode)}`
            ])
          },
          {
            label: 'Loan Number',
            valueKey: 'loanNumber'
          },
          {
            label: 'Property',
            valueKey: 'property'
          }
        ]}
        data={itemData}
        {...props}
      />
    ))
  )
};