import React from 'react';
import PropTypes from 'prop-types';

import { useHandleSameAsInsured } from './Logic';

import { MASKS } from 'app/schemas';

import Styled from './styles';

import Check from 'app/components/common/Form/Check';
import Field from 'app/components/common/Form/Field';

const Form = ({
  values,
  handleChange,
  setFieldValue,
  setValues,
  resetForm
}) => {
  const handleSameAsInsured = useHandleSameAsInsured(
    setValues,
    resetForm
  );

  return (
    <Styled
      autoComplete="off"
      className="create-claim-step-5"
    >
      <Check
        type="checkbox"
        id="sameAsInsured"
        label="Same as insured"
        checked={values.sameAsInsured}
        onChange={handleSameAsInsured}
      />
  
      <div className="create-claim-step-5__field-holder">
        <Field
          name="contactPersonName"
          label="Name"
          value={values.contactPersonName}
          onChange={handleChange}
          readOnly={values.sameAsInsured}
        />
      </div>
  
      <div className="create-claim-step-5__field-holder">
        <Field
          name="contactPersonPhone"
          label="Phone"
          value={values.contactPersonPhone}
          onChange={setFieldValue}
          readOnly={values.sameAsInsured}
          mask={MASKS.phone}
        />
      </div>
  
      <div className="create-claim-step-5__field-holder">
        <Field
          name="contactPersonAltPhone"
          label="Alternate Phone"
          value={values.contactPersonAltPhone}
          onChange={setFieldValue}
          readOnly={values.sameAsInsured}
          mask={MASKS.phone}
        />
      </div>
    </Styled>
  );
};

Form.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func,
  setFieldValue: PropTypes.func,
  setValues: PropTypes.func,
  resetForm: PropTypes.func
};

export default Form;