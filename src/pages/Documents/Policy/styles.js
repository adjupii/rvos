import styled from 'styled-components';

import Card from 'app/components/common/Card';

import { getBreakpointDown } from 'app/styles';

export default styled(Card)`
  display: flex;
  cursor: pointer;
  margin-bottom: 20px;

  .documents-policy {
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;
      padding: 16px 18px;
      line-height: 19px;
    }

    &__desc-holder {
      display: flex;
      flex: 1;
      align-items: center;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        align-items: flex-start;
      `)}
    }

    &__inner {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-between;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        flex-direction: column;
        align-items: flex-start;
      `)}
    }

    &__desc {
      font-weight: 600;
    }

    &__number {
      font-size: 11px;
    }

    &__date {
      color: ${({ theme }) => theme.colors['grey-2']};
    }

    &__icon {
      margin-right: 15px;
      fill: ${({ theme }) => theme.colors['grey-4']};

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        margin-top: 6px;
      `)}
    }
  }
`;