import styled from 'styled-components';

import {
  getBreakpointDown,
  getBreakpointUp
} from 'app/styles';

export default styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  &.in-policy-list {
    margin-bottom: 20px;

    ${({ theme }) => `
      ${getBreakpointDown(theme.breakpoints, 'l', `
        .policy-info-head {
          &__insured-name {
            font-size: 15px;
            line-height: 24px;
          }

          &__desc {
            font-size: 14px;
            line-height: 20px;
          }
        }
      `)}

      ${getBreakpointUp(theme.breakpoints, 'l', `
        .policy-info-head__right {
          padding-top: 4px;
        }
      `)}

      ${getBreakpointDown(theme.breakpoints, 's', `
        .policy-info-head__documents {
          display: none;
        }
      `)}
    `}
  }

  &.in-dashboard {
    flex-wrap: wrap;

    ${({ theme }) => `
      ${getBreakpointUp(theme.breakpoints, 'm', `
        padding-bottom: 16px;
        margin-bottom: 10px;
        border-bottom: 1px solid ${theme.colors['grey-7']};
      `)}

      ${getBreakpointDown(theme.breakpoints, 'xl', `
        .policy-info-head__left {
          width: 100%;
          margin-bottom: 16px;
        }
      `)}

      ${getBreakpointDown(theme.breakpoints, 'm', `
        .policy-info-head {
          &__documents {
            display: none;
          }

          &__insured-name {
            display: none;
          }

          &__desc {
            font-size: 14px;
            line-height: 21px;
            font-weight: 600;
          }
        }
      `)}

      ${getBreakpointUp(theme.breakpoints, 'xl', `
        .policy-info-head__right {
          padding-top: 4px;
        }
      `)}
    `}
  }

  .policy-info-head {
    &__insured-name {
      line-height: 18px;
      font-weight: 600;
      margin-bottom: 4px;
    }

    &__desc {
      font-size: 11px;
      line-height: 17px;
    }

    &__right {
      display: flex;
      align-items: center;
    }

    &__actions {
      margin-left: 15px;

      ${({ theme }) => getBreakpointUp(theme.breakpoints, 's', `
        margin-right: -12px;
      `)}

      .update-policy--closed {
        display: none;
      }

      .view-documents {
        ${({ theme }) => getBreakpointUp(theme.breakpoints, 's', `
          display: none;
        `)}
      }
    }
  }
`;