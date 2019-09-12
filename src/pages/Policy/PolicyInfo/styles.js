import styled from 'styled-components';

import {
  getBreakpointDown,
  getBreakpointUp,
  getBreakpointOnly
} from 'app/styles';

export default styled.div`
  .policy-info {
    &__box-holder {
      padding: 0 30px;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
        padding: 0 12px;
      `)}
    }

    &__top {
      display: flex;
      justify-content: space-between;
      padding-top: 20px;
      padding-bottom: 20px;

      ${({ theme }) => `
        border-bottom: 1px solid ${theme.colors['grey-7']};

        ${getBreakpointDown(theme.breakpoints, 'm', `
          border-bottom: none;
          padding-bottom: 0;
          padding-left: 8px;
          padding-right: 8px;
        `)}

        ${getBreakpointUp(theme.breakpoints, 'm', `
          align-items: center;
        `)}
      `}

      .policy-info__divider-holder {
        padding: 6px 0;
      }
    }

    &__main-info-holder {
      display: flex;

      ${({ theme }) => getBreakpointUp(theme.breakpoints, 'm', `
        max-width: 58%;
      `)}
    }

    &__icon {
      margin-right: 16px;
      flex-shrink: 0;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        display: none;
      `)}
    }

    &__insured-name-holder {
      display: flex;
      align-items: center;
      margin-bottom: 3px;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 'l', `
        margin-bottom: 8px;
      `)}
    }

    &__insured-name {
      font-weight: 600;
      line-height: 19px;
      margin-right: 5px;

      ${({ theme }) => `
        ${getBreakpointOnly(theme.breakpoints, 'm', `
          font-size: 15px;
        `)}

        ${getBreakpointDown(theme.breakpoints, 'm', `
          font-size: 16px;
          line-height: 24px;
        `)}
      `}
    }

    &__desc {
      font-size: 11px;
      line-height: 18px;

      ${({ theme }) => `
        color: ${theme.colors['grey-2']};

        ${getBreakpointOnly(theme.breakpoints, 'm', `
          font-size: 13px;
          line-height: 20px;
        `)}

        ${getBreakpointDown(theme.breakpoints, 'm', `
          font-size: 15px;
          line-height: 23px;
        `)}
      `}
    }

    &__top-links {
      display: flex;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
        display: none;
      `)}

      &-divider {
        margin: 0 16px;

        ${({ theme }) => getBreakpointUp(theme.breakpoints, 'xl', `
          margin: 0 24px;
        `)}
      }
    }

    &__actions {
      ${({ theme }) => getBreakpointUp(theme.breakpoints, 'm', `
        display: none;
      `)}

      margin: 0 -8px 0 15px;

      .new-claim {
        display: none;
      }

      .update-policy {
        &--closed {
          display: none;
        }
      }
    }

    &__divider-holder {
      display: flex;
    }

    &__documents-link {
      align-self: center;
    }

    &__bottom {
      display: flex;
      padding: 24px 0;

      ${({ theme }) => `
        ${getBreakpointDown(theme.breakpoints, 'xl', `
          flex-wrap: wrap;
        `)}

        ${getBreakpointOnly(theme.breakpoints, 'm', `
          flex-wrap: nowrap;
        `)}
      `}

      .policy-info__divider-holder {
        ${({ theme }) => `
          ${getBreakpointDown(theme.breakpoints, 'xl', `
            width: 100%;
          `)}

          ${getBreakpointUp(theme.breakpoints, 'xl', `
            padding: 6px 0;
          `)}

          ${getBreakpointOnly(theme.breakpoints, 'm', `
            width: auto;
            padding: 6px 0;
          `)}

          ${getBreakpointDown(theme.breakpoints, 'm', `
            padding-left: 8px;
            padding-right: 8px;
          `)}
        `}
      }
    }

    &__divider-bottom-ver {
      margin: 0 24px;

      ${({ theme }) => `
        ${getBreakpointDown(theme.breakpoints, 'xl', `
          display: none;
        `)}

        ${getBreakpointOnly(theme.breakpoints, 'm', `
          display: block;
          margin: 0 16px;
        `)}
      `}
    }

    &__divider-bottom-hor {
      margin: 24px 0 16px;

      ${({ theme }) => `
        ${getBreakpointUp(theme.breakpoints, 'xl', `
          display: none;
        `)}

        ${getBreakpointOnly(theme.breakpoints, 'm', `
          display: none;
        `)}
      `}
    }

    &__policy-billing-link {
      ${({ theme }) => getBreakpointDown(theme.breakpoints, 'l', `
        display: none;
      `)}
    }

    &__remaining-balance {
      .entity-details-info {
        margin-right: 0;
      }
    }
  }

  .entity-details-info {
    margin-right: 35px;

    &__label {
      margin-bottom: 3px;

      ${({ theme }) => `
        ${getBreakpointOnly(theme.breakpoints, 'm', `
          font-size: 13px;
        `)}

        ${getBreakpointDown(theme.breakpoints, 'm', `
          font-size: 14px;
          margin-bottom: 5px;
        `)}
      `}
    }

    &__value {
      ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
        font-size: 17px;
        line-height: 21px;
      `)}
    }
  }
`;