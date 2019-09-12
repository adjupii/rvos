import { useReducer, useCallback } from 'react';

const reducer = (state, action) => {
  const {
    type,
    payload: {
      name,
      data = {}
    }
  } = action;

  switch (type) {
    case 'change-page':
      return {
        name,
        data: {
          ...state.data,
          ...data
        }
      };
  }
};

const useInnerPages = defaultPage => {
  const [ state, dispatch ] = useReducer(
    reducer,
    {
      name: defaultPage,
      data: {}
    }
  );

  const changePage = useCallback(
    (name, data) => {
      dispatch({
        type: 'change-page',
        payload: {
          name,
          data
        }
      });
    },
    [ dispatch ]
  );

  const handleChangePage = useCallback(
    (name, data) => () => {
      changePage(name, data);
    },
    [ changePage ]
  );

  return {
    pageName: state.name,
    pageData: state.data,
    changePage,
    handleChangePage
  };
};

export default useInnerPages;