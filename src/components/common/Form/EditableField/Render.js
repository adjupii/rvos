import React from 'react';

import {
  Flex,
  Box
} from 'app/components/common/styled';
import Field from 'app/components/common/Form/Field';
import Button from './Button';
import Pencil from 'app/components/Icons/Pencil';

const Form = ({
  values,
  errors,
  handleChange,
  handleSubmit,
  isSubmitting,
  setFieldValue,
  touched,
  editMode,
  setEditMode,
  handleCancel,
  fieldProps: {
    name,
    mask,
    ...otherProps
  },
  registerChild,
  as
}) => (
  <Box
    ref={registerChild}
    as={as}
  >
    <Flex>
      <Field
        name={name}
        value={values[name]}
        error={touched[name] && errors[name]}
        onChange={mask ? setFieldValue : handleChange}
        mask={mask}
        editMode={editMode}
        autoFocus
        {...otherProps}
      />

      <Pencil
        width="24"
        height="24"
        cursor="pointer"
        onClick={setEditMode('editable')}
        display={editMode === 'static' ? 'block' : 'none'}
        mt="-3px"
      />
    </Flex>

    {
      editMode === 'editable' && (
        <Flex
          justifyContent="flex-end"
          pb={4}
        >
          <Button
            color="grey.2"
            disabled={isSubmitting}
            onClick={handleCancel}
          >
            CANCEL
          </Button>
  
          <Button
            color="link"
            disabled={isSubmitting}
            onClick={handleSubmit}
            ml={5}
          >
            SAVE
          </Button>
        </Flex>
      )
    }
  </Box>
);

Form.defaultProps = {
  as: 'form'
};

export default Form;