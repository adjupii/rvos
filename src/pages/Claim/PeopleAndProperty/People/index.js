import React from 'react';
import PropTypes from 'prop-types';

import {
  phone,
  joinedText,
  zipCode
} from 'app/format';

import Sections from 'app/components/EntityDetails/Sections';

const isExpanded = data => (
  data.role !== 'Other injured party'
  && !!(data.address || data.altPhone || data.email)
);

const People = ({
  data
}) => (
  data.map(({
    role,
    ...itemData
  }) => (
    <Sections
      key={role}
      title={role}
      iconName="Insured"
      mainSections={[
        {
          label: 'Name',
          valueKey: 'name'
        },
        {
          label: 'Phone',
          valueKey: 'phone',
          getValue: (value, values) => (
            (
              values.role !== 'Other injured party'
              && phone(value)
            )
            || '-'
          )
        }
      ]}
      sections={[
        {
          label: 'Address',
          valueKey: 'address',
          getValue: ({
            street,
            city,
            state,
            postalCode
          }) => (
            joinedText([
              street,
              city,
              state.abbreviation,
              zipCode(postalCode)
            ])
          )
        },
        {
          label: 'Alternate Phone',
          valueKey: 'altPhone',
          getValue: value => phone(value)
        },
        {
          label: 'Email',
          valueKey: 'email'
        }
      ]}
      isExpanded={isExpanded(itemData)}
      data={itemData}
    />
  ))
);

People.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default People;