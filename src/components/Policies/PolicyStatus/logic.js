import { useMemo } from 'react';

const useShowPolicyStatus = status => useMemo(
  () => (
    status.replace(/_/g, ' ').toUpperCase()
  ),
  [ status ]
);

export {
  useShowPolicyStatus
};