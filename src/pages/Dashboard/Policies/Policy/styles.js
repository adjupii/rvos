import styled from 'styled-components';

import { getBreakpointDown } from 'app/styles';

import Card from 'app/components/common/Card';

export default styled(Card)`
  display: flex;
  cursor: pointer;
  margin-bottom: 20px;

  ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
    flex-direction: column;
  `)}

  .policy {
    &__holder {
      padding: 12px 15px;
      flex: 1;
    }
  }
`;