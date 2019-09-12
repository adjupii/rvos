import styled from 'styled-components';

import { getBreakpointDown } from 'app/styles';

import Card from 'app/components/common/Card';

export default styled(Card)`
  display: flex;
  align-items: center;
  padding: 8px 0;
  margin-bottom: 20px;
  cursor: pointer;

  .start-claim {
    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 40px;
      border-right: 1px solid ${({ theme }) => theme.colors['grey-7']};
      margin-right: 16px;
    }

    &__text {
      font-weight: 600;
      line-height: 18px;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
        font-size: 14px;
      `)}
    }
  }
`;