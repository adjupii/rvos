import styled from 'styled-components';

import { getBreakpointDown } from 'app/styles';

export default styled.table`
  ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
    display: none;
  `)}

  &.table {
    &--only-for-extra-large {
      ${({ theme }) => getBreakpointDown(theme.breakpoints, 'xl', `
        display: none;
      `)}
    }
  }

  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${({ theme }) => theme.colors['grey-7']};

  th,
  td {
    vertical-align: top;
  }

  th {
    text-align: left;
    font-weight: 500;
    padding: 19px 24px;
    background: ${({ theme }) => theme.colors['grey-9']};
    border-bottom: 1px solid ${({ theme }) => theme.colors['grey-7']};

    &.th {
      &--right-aligned {
        text-align: right;
      }
    }
  }

  td {
    padding: 12px 24px;

    &.td {
      &--right-aligned {
        text-align: right;
      }

      &--color-lightgray {
        color: ${({ theme }) => theme.colors['grey-5']};
      }

      &--bold {
        font-weight: 500;
      }
    }
  }

  tr {
    &:first-child {
      td {
        padding-top: 24px;
      }
    }

    &:last-child {
      td {
        padding-bottom: 24px;
      }
    }
  }
`;