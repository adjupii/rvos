import { useContext } from 'react';

import { context } from 'app/components/common/Dialogs/Provider';
import DialogContainer from 'app/components/common/Dialogs/DialogsContainer';

export default function useDialog() {
  const value = useContext(context);

  return {
    ...value,
    Container: DialogContainer
  };
}