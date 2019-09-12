import React from 'react';
import PropTypes from 'prop-types';

import { MASKS } from 'app/schemas';

import Styled from './styles';

import DayPicker from 'app/components/common/Form/DayPicker';
import Check from 'app/components/common/Form/Check';
import Field from 'app/components/common/Form/Field';

const Form = ({
  values,
  setFieldValue,
  handleLossDate,
  handleLossTimeChecked
}) => (
  <Styled
    className="create-claim-step-2"
    autoComplete="off"
  >
    <div className="create-claim-step-2__loss-date-holder">
      <div className="create-claim-step-2__loss-date">
        <DayPicker
          onChange={handleLossDate}
          value={values.lossDate}
          inputProps={{
            name: 'lossDate',
            label: 'Loss Date'
          }}
          dayPickerProps={{
            disabledDays: {
              after: new Date()
            }
          }}
        />
      </div>
    </div>

    <div className="create-claim-step-2__loss-time-holder">
      <div className="create-claim-step-2__loss-time-check">
        <Check
          type="checkbox"
          id="lossTimeChecked"
          label="I know the time of loss"
          checked={values.lossTimeChecked}
          onChange={handleLossTimeChecked}
        />
      </div>

      <div className="create-claim-step-2__loss-time">
        <Field
          name="lossTime"
          value={values.lossTime}
          onChange={setFieldValue}
          readOnly={!values.lossTimeChecked}
          mask={MASKS.time12}
          showMask
        />
      </div>
    </div>
  </Styled>
);

Form.propTypes = {
  values: PropTypes.object,
  setFieldValue: PropTypes.func,
  handleLossDate: PropTypes.func,
  handleLossTimeChecked: PropTypes.func
};

export default Form;