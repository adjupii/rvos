import { useReducer, useCallback } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;

    case 'decrement':
      return state - 1;

    case 'reset':
      return 0;
  }
};

const useCounter = (initialState = 0) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const incrementCounter = useCallback(
    () => {
      dispatch({ type: 'increment' });
    },
    [ dispatch ]
  );

  const decrementCounter = useCallback(
    () => {
      dispatch({ type: 'decrement' });
    },
    [ dispatch ]
  );

  const resetCounter = useCallback(
    () => {
      dispatch({ type: 'reset' });
    },
    [ dispatch ]
  );

  return {
    count: state,
    incrementCounter,
    decrementCounter,
    resetCounter
  };
};

export {
  useCounter
};