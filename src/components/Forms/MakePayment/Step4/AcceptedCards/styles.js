import styled from 'styled-components';

import { getBreakpointDown } from 'app/styles';

export default styled.div`
  margin-top: 25px;

  .c-accepted-cards {
    &__title {
      font-size: 11px;
      line-height: 19px;
      color: ${({ theme }) => theme.colors['grey-3']};
      margin-bottom: 6px;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
        font-size: 13px;
      `)}
    }

    &__holder {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }

    &__card {
      padding: 0 20px 10px 0;
    }
  }
`;