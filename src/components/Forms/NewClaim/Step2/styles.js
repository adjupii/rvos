import styled from 'styled-components';

import { getBreakpointDown } from 'app/styles';

export default styled.form`
  margin-top: 19px;
  display: flex;
  flex-wrap: wrap;

  .create-claim-step-2 {
    &__loss-date-holder {
      margin-right: 150px;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 'l', `
        margin-bottom: 15px;
      `)}

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        width: 100%;
        margin-right: 0;
      `)}
    }

    &__loss-date {
      width: 130px;
    }

    &__loss-time-holder {
      display: flex;
      flex-wrap: wrap;
    }

    &__loss-time-check {
      margin: 0 35px 0 0;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        width: 100%;
        margin: 0 0 20px;
      `)}
    }

    &__loss-time {
      width: 75px;
    }
  }
`;