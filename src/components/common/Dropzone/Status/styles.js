import styled from 'styled-components';

import { getBreakpointDown } from 'app/styles';

export default styled.div`
  margin-top: 25px;
  padding: 24px 24px 24px 34px;
  position: relative;

  ${({ theme }) => `
    border: 1px solid ${theme.colors['grey-7']};

    ${getBreakpointDown(theme.breakpoints, 'xl', `
      padding-left: 15px;
      padding-right: 15px;
    `)}
  `}

  .upload-status {
    &__close-icon {
      position: absolute;
      top: 23px;
      right: 24px;
      cursor: pointer;
    }

    &__uploaded {
      font-weight: 500;
      line-height: 18px;
      text-align: center;
    }

    &__file {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 38px;
    }

    &__file-name,
    &__status {
      font-weight: 500;
      line-height: 18px;
    }

    &__file-name {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 47%;

      ${({ theme }) => `
        ${getBreakpointDown(theme.breakpoints, 'xl', `
          width: 38%;
        `)}

        ${getBreakpointDown(theme.breakpoints, 'm', `
          font-size: 13px;
          line-height: 20px;
          width: 100%;
          margin-bottom: 5px;
        `)}
      `}
    }

    &__status {
      width: 30px;
      text-align: right;
    }

    &__status-holder {
      display: flex;
      align-items: center;
      flex: 1;
      position: relative;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
        width: 100%;
      `)}
    }

    &__status-box {
      flex: 1;
      margin: 0 25px;

      ${({ theme }) => `
        ${getBreakpointDown(theme.breakpoints, 'xl', `
          margin: 0 15px;
        `)}

        ${getBreakpointDown(theme.breakpoints, 'm', `
          margin: 0 15px 0 0;
        `)}
      `}
    }

    &__error {
      position: absolute;
      bottom: -12px;
      font: 11px/19px "Muli", sans-serif;
      text-align: center;
      width: 100%;
      padding: 0 55px 0 25px;

      ${({ theme }) => `
        color: ${theme.colors['red-1']};

        ${getBreakpointDown(theme.breakpoints, 'xl', `
          padding: 0 45px 0 15px;
        `)}

        ${getBreakpointDown(theme.breakpoints, 'm', `
          font-size: 12px;
          bottom: -15px;
          padding: 0 45px 0 0;
        `)}

        ${getBreakpointDown(theme.breakpoints, 's', `
          padding: 0;
          text-align: left;
        `)}
      `}
    }
  }
`;