import styled from 'styled-components';

import { getBreakpointDown } from 'app/styles';

export default styled.form`
  .make-payment-step-4 {
    &__field-box-holder {
      display: flex;
      flex-wrap: wrap;
      margin-right: -24px;

      .make-payment-field-box {
        margin-right: 24px;
      }
    }

    &__check-holder {
      margin-bottom: 5px;
    }

    &__icon-holder {
      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        display: none;
      `)}

      margin: 25px 0 0;
    }

    &__text-holder {
      margin-top: 25px;
    }
  }
`;