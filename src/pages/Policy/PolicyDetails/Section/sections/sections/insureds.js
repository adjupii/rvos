import React from 'react';

import {
  phone,
  joinedText,
  zipCode,
  date,
  taxId
} from 'app/format';

import Sections from 'app/components/EntityDetails/Sections';

export default {
  insureds: ({
    data
  }) => (
    data.map((
      {
        entityType,
        ...itemData
      }
    ) => (
      <Sections
        key={entityType}
        title={entityType}
        iconName="Insured"
        mainSections={[
          {
            label: 'Name',
            valueKey: 'fullName'
          },
          {
            label: 'Phone',
            valueKey: 'phone',
            getValue: value => phone(value) || '-'
          }
        ]}
        sections={[
          {
            label: 'Type',
            valueKey: 'type'
          },
          {
            label: 'Address',
            valueKey: 'address',
            getValue: ({
              street,
              additional,
              city,
              state,
              postalCode
            }) => (
              joinedText([
                street,
                additional,
                city,
                `${state.abbreviation} ${zipCode(postalCode)}`
              ])
            )
          },
          {
            label: 'Email',
            valueKey: 'email'
          },
          {
            label: 'Date of Birth',
            valueKey: 'dateOfBirth',
            getValue: value => date(value)
          },
          {
            label: 'Tax ID',
            valueKey: 'taxId',
            getValue: (value, values) => taxId(value, values.taxIdType)
          },
          {
            label: 'Contact Person',
            valueKey: 'contactPerson'
          },
          {
            label: 'Remarks',
            valueKey: 'remarks'
          },
          {
            label: 'Property',
            valueKey: 'property'
          }
        ]}
        data={itemData}
        className="title-with-icon--policy-sub-section"
      />
    ))
  )
};