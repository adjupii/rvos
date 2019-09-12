import React from 'react';
import PropTypes from 'prop-types';

import Textarea from 'app/components/common/Form/Textarea';

const Form = ({
  values,
  handleChange
}) => (
  <form autoComplete="off">
    <Textarea
      name="lossDescription"
      value={values.lossDescription}
      onChange={handleChange}
      maxLength="1000"
      className="textarea--loss-description"
    />
  </form>
);

Form.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func
};

export default Form;