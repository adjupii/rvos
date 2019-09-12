import React from 'react';
import PropTypes from 'prop-types';
import Textarea from 'app/components/common/Form/Textarea';
import FormText from 'app/components/Layouts/FormText';

const Form = ({
  values:{
    text
  },
  handleChange
}) => (
  <form autoComplete="off">
    <FormText css="margin-bottom: 35px">
      Please describe your request
    </FormText>

    <Textarea
      name="text"
      value={text}
      onChange={handleChange}
    />
  </form>
);

Form.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func
};

export default Form;