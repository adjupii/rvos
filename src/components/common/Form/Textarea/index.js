import styled from 'styled-components';

import { getBreakpointUp } from 'app/styles';

export default styled.textarea.attrs({
  className: 'textarea'
})`
  outline: none;
  resize: none;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors['grey-7']};
  font-size: 16px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors['grey-5']};
  width: 100%;
  height: 100px;

  &.textarea {
    &--loss-description {
      ${({ theme }) => getBreakpointUp(theme.breakpoints, 'l', `
        width: 556px;
      `)}
    }
  }
`;