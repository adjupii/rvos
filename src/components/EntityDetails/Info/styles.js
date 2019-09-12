import styled from 'styled-components';

import { getBreakpointDown } from 'app/styles';

export default styled.div`
  line-height: 19px;
  margin: ${({ indents }) => indents};

  &.in-table-info,
  &.claim-details-info,
  &.claim-contact-info {
    margin-bottom: 20px;
  }

  .entity-details-info {
    &__label {
      font-family: "Muli", sans-serif;

      ${({ theme, labelColor }) => `
        color: ${theme.colors[labelColor]};

        ${getBreakpointDown(theme.breakpoints, 'l', `
          font-size: 14px;
          margin-bottom: 2px;
        `)}
      `};
    }

    &__value {
      font-size: 14px;
      color: ${({ theme, valueColor }) => theme.colors[valueColor]};
    }
  }
`;