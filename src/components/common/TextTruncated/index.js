import styled from 'styled-components';

import { getBreakpointUp } from 'app/styles';

export default styled.div.attrs({
  className: 'text-truncated'
})`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &.text-truncated {
    &--document-name {
      max-width: 150px;

      ${({ theme }) => getBreakpointUp(theme.breakpoints, 'xl', `
        max-width: 240px;
      `)}
    }
  }
`;