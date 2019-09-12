import styled from 'styled-components';

import {
  getBreakpointDown,
  getBreakpointUp
} from 'app/styles';

export default styled.div`
  display: flex;
  flex-direction: column;

  .tabs-slider {
    ${({ theme }) => getBreakpointDown(theme.breakpoints, 'l', `
      display: none;
    `)}
  }

  .tab-accordion {
    ${({ theme }) => getBreakpointUp(theme.breakpoints, 'l', `
      display: none;
    `)}
  }

  .tabs__content {
    order: ${({ order }) => order};
  }

  &.tabs {
    &--policy-list {
      .tabs-slider {
        ${({ theme }) => getBreakpointUp(theme.breakpoints, 's', `
          display: block;
        `)}

        &__tab {
          margin-left: 30px;
        }
      }

      .tab-accordion {
        display: none;
        border-top: none;
        border-bottom: none;
        height: 34px;
        padding: 0;

        ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
          display: flex;
        `)}
      }

      .tabs__content {
        padding-top: 20px;
      }
    }

    &--in-card {
      .tabs-slider {
        margin-top: 20px;
      }

      .tabs__content {
        padding: 30px 25px;

        ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
          padding-left: 15px;
          padding-right: 15px;
        `)}
      }
    }
  }
`;