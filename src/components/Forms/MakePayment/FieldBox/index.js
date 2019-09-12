import styled from 'styled-components';

import {
  getBreakpointUp,
  getBreakpointOnly
} from 'app/styles';

export default styled.div.attrs({
  className: 'make-payment-field-box'
})`
  width: 100%;
  margin-top: 47px;

  ${({ theme }) => getBreakpointUp(theme.breakpoints, 's', `
    width: 247px;
  `)}

  &.make-payment-field-box {
    &--size {
      &-big {
        ${({ theme }) => getBreakpointUp(theme.breakpoints, 's', `
          width: 360px;
        `)}
      }

      &-medium {
        ${({ theme }) => getBreakpointOnly(theme.breakpoints, 's', `
          width: 178px;
        `)}

        width: 186px;
      }

      &-small {
        width: 120px;
      }
    }
  }

  &.make-payment-field-box--no-indent {
    margin-top: 0;
  }
`;