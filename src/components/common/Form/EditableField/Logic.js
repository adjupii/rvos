import {
  compose,
  withState,
  withHandlers,
  lifecycle
} from 'recompose';
import { withFormik } from 'formik';

export default compose(
  withState(
    'editMode',
    'changeEditMode',
    'static'
  ),

  withFormik({
    mapPropsToValues: ({
      fieldProps: { name },
      initialValue
    }) => ({
      [name]: initialValue || ''
    }),
    validationSchema: ({ schema }) => schema,
    handleSubmit: (
      values,
      {
        setSubmitting,
        props: {
          action,
          changeEditMode,
          notify
        }
      }
    ) => {
      Promise.resolve(action(values))
        .then(() => {
          setSubmitting(false);

          changeEditMode(
            () => 'static',
            () => {
              if (typeof notify === 'function') {
                notify();
              }
            }
          );
        })
        .catch((error) => {
          if (error.code !== 401) {
            setSubmitting(false);
          }
        });
    }
  }),

  withHandlers(() => {
    let _ref;

    return {
      registerChild: () => ref => {
        _ref = ref;
      },

      setEditMode: ({ changeEditMode }) => editMode => () => {
        changeEditMode(() => editMode);
      },

      handleCancel: ({
        changeEditMode,
        setFieldValue,
        fieldProps: { name },
        initialValue
      }) => () => {
        setFieldValue(name, initialValue);

        changeEditMode(() => 'static');
      },

      handleWindowClick: ({
        changeEditMode,
        setFieldValue,
        fieldProps: { name },
        initialValue,
        editMode
      }) => e => {
        if ((editMode === 'editable') && !_ref.contains(e.target)) {
          setFieldValue(name, initialValue);

          changeEditMode(() => 'static');
        }
      },
    };
  }),

  lifecycle({
    componentDidMount() {
      window.addEventListener('click', this.props.handleWindowClick);
    },

    componentWillUnmount() {
      window.removeEventListener('click', this.props.handleWindowClick);
    }
  })
);