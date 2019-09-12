import React from 'react';
import PropTypes from 'prop-types';

import Textarea from 'app/components/common/Form/Textarea';
import FormText from 'app/components/Layouts/FormText';
import DayPicker from 'app/components/common/Form/DayPicker';

const Form = ({
  values,
  handleChange,
  setFieldValue
}) => (
  <form autoComplete="off">
    <FormText css="margin-bottom: 35px">
      Date the change should take effect
    </FormText>

    <div
      css={`
        width: 160px;
        margin-bottom: 35px;
      `}
    >
      <DayPicker
        onChange={setFieldValue}
        value={values.requestedEffectiveDate}
        inputProps={{
          name: 'requestedEffectiveDate'
        }}
        dayPickerProps={{
          disabledDays: {
            before: new Date()
          }
        }}
      />
    </div>

    <FormText css="margin-bottom: 35px">
      Please tell us what you would like to change. We will contact you to confirm your request.
    </FormText>

    <Textarea
      name="text"
      value={values.text}
      onChange={handleChange}
    />
  </form>
);

Form.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func,
  setFieldValue: PropTypes.func
};

export default Form;