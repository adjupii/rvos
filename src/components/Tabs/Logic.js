import {
  compose,
  withStateHandlers,
  withHandlers
} from 'recompose';

export default compose(
  withStateHandlers(
    ({
      initialSelected = 0
    }) => ({
      selected: initialSelected
    }),
    {
      changeSelected: () => selected => ({
        selected
      })
    }
  ),

  withHandlers({
    handleChangeSelected: ({ changeSelected }) => selected => () => {
      changeSelected(selected);
    }
  })
);