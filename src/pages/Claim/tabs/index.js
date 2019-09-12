import React from 'react';

import Details from '../Details';
import PeopleAndProperty from '../PeopleAndProperty';
import Payment from '../Payment';
import Team from 'app/pages/Claim/Team';
import Documentation from 'app/pages/Claim/Documentation';

export default [
  {
    key: 'details',
    title: 'Details',
    render: props => (
      <Details {...props} />
    )
  },
  {
    key: 'people_and_property',
    getTitle: section => (
      section.includes('property')
        ? 'People and Property'
        : 'People'
    ),
    render: props => (
      <PeopleAndProperty {...props} />
    )
  },
  {
    key: 'documents',
    title: 'Documents',
    render: props => (
      <Documentation {...props} />
    )
  },
  {
    key: 'payment',
    title: 'Payment',
    render: props => (
      <Payment {...props} />
    )
  },
  {
    key: 'team',
    title: 'Team',
    render: props => (
      <Team {...props} />
    )
  }
];