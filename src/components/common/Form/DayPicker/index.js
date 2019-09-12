import React, { useCallback } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import { date } from 'app/format';

import Field from 'app/components/common/Form/Field';
import Overlay from './Overlay';

const DayPicker = ({
  inputProps,
  onChange,
  ...props
}) => {
  const handleDayChange = useCallback(
    selectedDay => {
      onChange(inputProps.name, selectedDay);
    },
    [ onChange, inputProps.name ]
  );

  return (
    <DayPickerInput
      component={Field}
      placeholder=''
      onDayChange={handleDayChange}
      overlayComponent={Overlay}
      formatDate={date}
      inputProps={{
        readOnly: true,
        select: true,
        ...inputProps
      }}
      {...props}
    />
  );
};

DayPicker.defaultProps = {
  format: 'MMM DD, YYYY'
};

export default DayPicker;