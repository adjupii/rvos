import { compose } from 'redux';
import pickBy from 'lodash/pickBy';
import mapValues from 'lodash/mapValues';

import { createNewClaim } from 'app/api/claims';

import {
  date,
  timeFrom12To24,
  numbers
} from 'app/format';

const onAction = (setFetching, changePage, values) => {
  setFetching(true);

  const PARAMS = [
    'claimType',
    'claimSubType',
    'lossDate',
    'lossTime',
    'policyNo',
    'lossLocationPropertyCode',
    'lossLocationAddress',
    'lossLocationCity',
    'lossLocationState',
    'lossLocationZip',
    'contactPersonName',
    'contactPersonPhone',
    'contactPersonAltPhone',
    'lossDescription'
  ];

  const params = compose(
    values => (
      mapValues(
        values,
        (value, key) => {
          if (key === 'lossDate') {
            return date(value, 'MM-DD-YYYY');
          }

          if (key === 'lossTime') {
            return timeFrom12To24(value);
          }

          if (
            key === 'claimType'
            || key === 'lossLocationZip'
            || key === 'contactPersonPhone'
            || key === 'contactPersonAltPhone'
          ) {
            return numbers(value);
          }

          return value;
        }
      )
    ),
    values => (
      pickBy(
        values,
        (value, key) =>
          PARAMS.includes(key)
          && value
          && value !== 'lossDiff'
      )
    )
  )(values);

  createNewClaim(params)
    .then(({ fnolNumber }) => {
      setFetching(false);

      changePage(
        'new-claim-success',
        { fnolNumber }
      );
    })
    .catch(() => {
      setFetching(false);
    });
};

export {
  onAction
};