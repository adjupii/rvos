import styled from 'styled-components';

import {
  getBreakpointDown,
  getBreakpointBetween
} from 'app/styles';

import Card from 'app/components/common/Card';

export default styled(Card)`
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
  line-height: 18px;

  .claim {
    &__status {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 56px;
      border-radius: 8px 0 0 8px;

      &--active {
        background: ${({ theme }) => theme.colors['gradient-3']};
      }

      &--closed {
        background: ${({ theme }) => theme.colors['green-2']};
      }
    }

    &__inner {
      display: flex;
      flex: 1;
      padding: 16px;
    }

    &__left-right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;
      padding: 0 8px;
    }

    &__type {
      font-weight: 600;
    }

    &__right {
      display: flex;
      align-items: center;
    }

    &__total {
      font: 300 18px/23px "Muli", sans-serif;
      color: ${({ theme }) => theme.colors['grey-2']};
    }

    &__numbers-holder {
      display: flex;
    }

    &__number-holder {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-family: "Muli", sans-serif;

      &-icon {
        fill: ${({ theme }) => theme.colors['grey-6']};
        margin-right: 8px;
        flex-shrink: 0;
      }

      &--policy {
        width: 119px;
        margin-left: 37px;
      }

      &--claim {
        width: 101px;
      }
    }

    &__loss-date {
      color: ${({ theme }) => theme.colors['grey-2']};
      margin: 0 0 0 30px;
      width: 80px;
      text-align: right;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
        font-size: 14px;
      `)}
    }

    &__arrow-holder {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .claim-pending {
    text-align: right;
    width: 100%;
  }

  &.claim {
    &.in-claim-center {
      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        flex-direction: column;
      `)}

      .claim {
        &__status {
          ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
            height: 8px;
            border-radius: 8px 8px 0 0;
            width: 100%;

            svg {
              display: none;
            }
          `)}
        }

        &__inner {
          ${({ theme }) => getBreakpointBetween(theme.breakpoints, 'm', 'xl', `
            padding-right: 0;
          `)}
        }

        &__left-right,
        &__right {
          ${({ theme }) => getBreakpointDown(theme.breakpoints, 'xl', `
            flex-direction: column;
            align-items: flex-start;
          `)}
        }

        &__left-right {
          ${({ theme }) => getBreakpointDown(theme.breakpoints, 'xl', `
            padding: 4px;
          `)}
        }

        &__type {
          ${({ theme }) => `
            ${getBreakpointDown(theme.breakpoints, 'xl', `
              margin-bottom: 8px;
            `)}

            ${getBreakpointDown(theme.breakpoints, 's', `
              font-size: 15px;
              line-height: 23px;
            `)}
          `}
        }

        &__loss-date {
          ${({ theme }) => `
            ${getBreakpointDown(theme.breakpoints, 'xl', `
              order: -1;
              width: auto;
              margin: 0 0 24px;
              text-align: left;
            `)}
          `}
        }

        &__arrow-holder {
          ${({ theme }) => `
            ${getBreakpointBetween(theme.breakpoints, 'm', 'xl', `
              width: 40px;
              border-left: 1px solid ${theme.colors['grey-7']};
            `)}

            ${getBreakpointDown(theme.breakpoints, 'm', `
              display: none;
            `)}
          `}
        }
      }

      .claim-pending {
        ${({ theme }) => getBreakpointDown(theme.breakpoints, 'xl', `
          text-align: left;
        `)}
      }
    }

    &.in-dashboard {
      .claim__arrow-holder {
        display: none;
      }

      ${({ theme }) => `
        ${getBreakpointDown(theme.breakpoints, 'm', `
          .claim {
            &__inner {
              padding: 10px 8px;
            }

            &__left-right {
              flex-direction: column;
              align-items: flex-start;
            }

            &__type {
              font-size: 14px;
              margin-bottom: 5px;
            }

            &__loss-date {
              width: auto;
              margin: 0;
              text-align: left;
            }

            &__numbers-holder {
              display: none;
            }
          }
        `)}
      `}
    }
  }
`;