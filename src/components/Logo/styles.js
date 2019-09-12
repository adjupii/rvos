import styled from 'styled-components';

import { getBreakpointUp } from 'app/styles';

export default styled.div`
  width: 106px;

  ${({ theme }) => getBreakpointUp(theme.breakpoints, 'xl', `
    width: 125px;
  `)}
}
`;