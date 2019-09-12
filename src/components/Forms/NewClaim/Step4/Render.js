import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { onLocation } from './Logic';

import { useClaimLocationsForSelect } from 'app/hooks/claims';
import { useStatesForSelect } from 'app/hooks/states';

import { MASKS } from 'app/schemas';

import Styled from './styles';

import Select from 'app/components/Select';
import Field from 'app/components/common/Form/Field';

const Form = ({
  locations,
  states,
  values,
  setFieldValue,
  setValues,
  handleChange
}) => {
  const locationForSelect = useClaimLocationsForSelect(locations);

  const statesForSelect = useStatesForSelect(states);

  const handleLocation = useCallback(
    value => {
      onLocation(setValues, value);
    },
    [ setValues ]
  );

  const handleSelect = useCallback(
    (value, name) => {
      setFieldValue(name, value);
    },
    [ setFieldValue ]
  );

  return (
    <Styled
      autoComplete="off"
      className="create-claim-step-4"
    >
      <Select
        place="in-form"
        inputProps={{
          name: 'lossLocationPropertyCode',
          label: 'Location'
        }}
        selected={values.lossLocationPropertyCode}
        onChange={handleLocation}
        items={locationForSelect}
      />

      {
        values.lossLocationPropertyCode === 'lossDiff' && (
          <>
            <div className="create-claim-step-4__field-holder">
              <Field
                name="lossLocationAddress"
                label="Address"
                value={values.lossLocationAddress}
                onChange={handleChange}
              />
            </div>

            <div className="create-claim-step-4__field-holder">
              <Field
                name="lossLocationCity"
                label="City"
                value={values.lossLocationCity}
                onChange={handleChange}
              />
            </div>

            <div className="create-claim-step-4__field-holder">
              <Select
                place="in-form"
                inputProps={{
                  name: 'lossLocationState',
                  label: 'State'
                }}
                selected={values.lossLocationState}
                onChange={handleSelect}
                items={statesForSelect}
              />
            </div>

            <div className="create-claim-step-4__field-holder">
              <Field
                name="lossLocationZip"
                label="Zip code"
                value={values.lossLocationZip}
                mask={MASKS.zipCode}
                onChange={setFieldValue}
              />
            </div>
          </>
        )
      }
    </Styled>
  );
};

Form.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object),
  states:PropTypes.arrayOf(PropTypes.object),
  values: PropTypes.object,
  setFieldValue: PropTypes.func,
  setValues: PropTypes.func,
  handleChange: PropTypes.func
};

export default Form;