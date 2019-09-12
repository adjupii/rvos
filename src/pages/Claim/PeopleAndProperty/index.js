import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { useApi } from 'app/hooks/api';

import {
  getClaimPeople,
  getClaimProperty
} from 'app/api/claims';

import Loader from 'app/components/common/Loader';
import People from './People';
import Property from './Property';

const PeopleAndProperty = ({
  id,
  idType,
  section
}) => {
  const
    isPropertyExist = section.includes('property'),

    api = useCallback(
      () => {
        const apis = [
          getClaimPeople(id, { idType })
        ];

        if (isPropertyExist) {
          apis.push(getClaimProperty(id, { idType }));
        }

        return Promise.all(apis);
      },
      [ isPropertyExist, id, idType ]
    ),

    [ fetching, data ] = useApi(api);

  if (fetching) {
    return <Loader />;
  }

  if (data) {
    const [
      people,
      property
    ] = data;

    return (
      <>
        {
          people.length
            ? <People data={people} />
            : 'No people found'
        }

        {
          isPropertyExist && (
            property.length
              ? <Property data={property} />
              : 'No property found'
          )
        }
      </>
    );
  }

  return null;
};

PeopleAndProperty.propTypes = {
  id: PropTypes.string,
  idType: PropTypes.string,
  section: PropTypes.array
};

export default PeopleAndProperty;