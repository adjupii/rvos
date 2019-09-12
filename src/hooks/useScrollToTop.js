import { useEffect } from 'react';

const useScrollToTop = pathName => {
  useEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [ pathName ]
  );
};

export default useScrollToTop;