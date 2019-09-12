import { useCallback } from 'react';

import history from 'app/history';

const useGoToPage = page => useCallback(
  () => {
    history.push(page);
  },
  [ page ]
);

export default useGoToPage;