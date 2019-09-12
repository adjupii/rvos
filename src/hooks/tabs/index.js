import { useMemo } from 'react';

import { getTabs } from 'app/helpers/tabs';

const useTabs = (sections, config) => (
  useMemo(
    () => getTabs(sections, config),
    [ sections, config ]
  )
);

export {
  useTabs
};