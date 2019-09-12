import {
  withHandlers,
  compose
} from 'recompose';

export default compose(
  withHandlers({
    handleChange: ({
      onChange,
      name
    }) => e => {
      onChange(name, e.target.value);
    },

    handleBlur: ({ onBlur, name }) => () => {
      onBlur(name, true);
    }
  })
);