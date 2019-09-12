import styled from 'styled-components';

import {
  getBreakpointDown,
  getBreakpointUp
} from 'app/styles';

const DEFAULT_STYLES = `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  border-radius: 8px 0 0 8px;
`;

const SMALL_STYLES = `
  height: 8px;
  border-radius: 8px 8px 0 0;
`;

export default styled.div`
  &.in-policy-list {
    ${({ theme }) => `
      ${getBreakpointDown(theme.breakpoints, 's', `
        ${SMALL_STYLES}
      `)}

      ${getBreakpointUp(theme.breakpoints, 's', `
        ${DEFAULT_STYLES}
      `)}
    `}
  }

  &.in-dashboard {
    ${({ theme }) => `
      ${getBreakpointDown(theme.breakpoints, 'm', `
        ${SMALL_STYLES}
      `)}

      ${getBreakpointUp(theme.breakpoints, 'm', `
        ${DEFAULT_STYLES}
      `)}
    `}
  }

  &.policy-status {
    &--active {
      background: ${({ theme }) => theme.colors['gradient-1']};
    }

    &--closed,
    &--pending_cancel {
      background: ${({ theme }) => theme.colors['gradient-2']};
    }

    &--canceled {
      background: ${({ theme }) => theme.colors['gradient-5']};
    }
  }

  .policy-status {
    &__text {
      color: #fff;
      font-size: 12px;
      line-height: 18px;
      font-weight: 600;
      white-space: nowrap;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        display: none;
      `)}
    }
  }
`;