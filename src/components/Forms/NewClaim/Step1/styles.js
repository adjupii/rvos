import styled from 'styled-components';

import { getBreakpointDown } from 'app/styles';

export default styled.form`
  .create-claim-step-1 {
    &__types {
      display: flex;
      flex-wrap: wrap;
    }

    &__sub-types-text {
      font: 16px/27px "Muli", sans-serif;
      color: ${({ theme }) => theme.colors['grey-2']};
      margin-bottom: 15px;
    }

    &__sub-type-holder {
      margin-bottom: 5px;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        margin-bottom: 15px;
      `)}
    }
  }
`;