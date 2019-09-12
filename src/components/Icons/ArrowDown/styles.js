import styled from 'styled-components';

import Icon from 'app/components/new/Icon';

export default styled(Icon)`
  cursor: pointer;

  .c-arrow-down__path {
    fill: ${({ theme }) => theme.colors['grey-2']};

    .header-profile & {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;