import styled from 'styled-components';

import Icon from 'app/components/new/Icon';

export default styled(Icon)`
  .c-arrow-down-fill__path {
    fill: ${({ theme }) => theme.colors['grey-2']};

    .c-select--signin & {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;