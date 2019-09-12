import styled from 'styled-components';
import classNames from 'classnames';

import { getBreakpointDown } from 'app/styles';

export default styled.main.attrs(
  ({
    showNeedHelp
  }) => ({
    className: classNames(
      'main',
      { 'main--with-need-help': showNeedHelp }
    )
  })
)`
  padding: 100px 0 30px;
  min-height: calc(100vh - 60px);

  ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
    min-height: calc(100vh - 80px);
  `)}

  &.main {
    &--with-need-help {
      min-height: calc(100vh - 120px);

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        min-height: calc(100vh - 140px);
      `)}
    }
  }
`;