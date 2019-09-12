import styled from 'styled-components';

import { getBreakpointDown } from 'app/styles';

export default styled.div`
  padding: 25px 30px;

  ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
    padding: 25px 16px;
  `)}

  .steps {
    &__button-holder {
      text-align: right;
    }
  }
`;