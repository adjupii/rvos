import React from 'react';
import PropTypes from 'prop-types';

import { useClaimTypesGrouped } from 'app/hooks/claims';
import { useHandleClaimType } from './Logic';

import Styled from './styles';

import ClaimType from './ClaimType';
import Check from 'app/components/common/Form/Check';

const Form = ({
  values: {
    claimType,
    claimSubType
  },
  setValues,
  handleChange,
  data
}) => {
  const types = useClaimTypesGrouped(data);

  const handleClaimType = useHandleClaimType(types, setValues);

  return (
    <Styled
      className="create-claim-step-1"
      autoComplete="off"
    >
      <div className="create-claim-step-1__types">
        {
          Object.keys(types).map(id => {
            const {
              title,
              name
            } = types[id];
  
            return (
              <ClaimType
                key={id}
                id={id}
                title={title}
                name="claimType"
                iconName={name}
                selected={id === claimType}
                onChange={handleClaimType}
              />
            );
          })
        }
      </div>
  
      {
        !!(types[claimType] && types[claimType].subtypes.length)
        && (
          <>
            <div className="create-claim-step-1__sub-types-text">
              Choose option that best describes the incident:
            </div>
  
            {
              types[claimType].subtypes.map(subType => {
                const {
                  id,
                  title
                } = subType;
  
                return (
                  <div
                    key={id}
                    className="create-claim-step-1__sub-type-holder"
                  >
                    <Check
                      type="radio"
                      name="claimSubType"
                      id={id}
                      label={title}
                      value={id}
                      checked={Number(claimSubType) === id}
                      onChange={handleChange}
                    />
                  </div>
                );
              })
            }
          </>
        )
      }
    </Styled>
  );
};

Form.propTypes = {
  values: PropTypes.object,
  setValues: PropTypes.func,
  handleChange: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object)
};

export default Form;