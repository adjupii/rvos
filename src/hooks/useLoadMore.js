import {
  useState,
  useCallback
} from 'react';

export default defaultOffset => {
  const [ offset, setOffset ] = useState(defaultOffset);

  const handleLoadMore = useCallback(
    () => {
      setOffset(prevOffset => prevOffset + defaultOffset);
    },
    [
      setOffset,
      defaultOffset
    ]
  );

  return {
    offset,
    setOffset,
    handleLoadMore
  };
};