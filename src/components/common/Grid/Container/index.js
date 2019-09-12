import styled from 'styled-components';

import { getBreakpointUp } from 'app/styles';

export default styled.div.attrs({
  className: 'container'
})`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  ${({ theme }) => `
    ${getBreakpointUp(theme.breakpoints, 's', 'max-width: 540px;')}

    ${getBreakpointUp(theme.breakpoints, 'm', 'max-width: 720px;')}

    ${getBreakpointUp(theme.breakpoints, 'l', 'max-width: 960px;')}

    ${getBreakpointUp(theme.breakpoints, 'xl', 'max-width: 1140px;')}
  `}
`;