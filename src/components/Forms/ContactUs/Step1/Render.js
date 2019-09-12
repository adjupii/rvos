import React from 'react';
import PropTypes from 'prop-types';

import {
  Box
} from 'app/components/common/styled';
import Check from 'app/components/common/Form/Check';

const Form = ({
  values: {
    topic
  },
  handleChange,
  topics
}) => (
  <form autoComplete="off">
    {
      topics.map(t => {
        const
          {
            id,
            label
          } = t;

        return (
          <Box
            key={id}
            mb={1}
          >
            <Check
              type="radio"
              name="topic"
              id={id}
              label={label}
              value={id}
              checked={Number(topic) === id}
              onChange={handleChange}
            />
          </Box>
        );
      })
    }
  </form>
);

Form.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func,
  topics: PropTypes.array
};

export default Form;