import { useState, useCallback } from 'react';

const useToggle = (initialState = false) => {
  const [ state, setState ] = useState(initialState);

  const handleState = useCallback(
    () => {
      setState(prevState => !prevState);
    },
    [ setState ]
  );

  return [
    state,
    handleState
  ];
};

export {
  useToggle
};