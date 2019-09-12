import styled from 'styled-components';
import Card from 'app/components/common/Card';

import {
  getBreakpointDown
} from 'app/styles';

export default styled(Card)`
  padding: 20px 22px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  .c-contact-us-block{
    &__icon-wrap{
      padding-right: 25px;
      max-width: 55px;
      width: 100%;
      svg{
        max-width: 35px;
      }
    }

    &__info-wrap{
      padding-left: 25px;
      border-left: 1px solid rgba(29,6,78,0.15);

      p{
        font-family: Muli;
        font-size: 16px;
        font-weight: bold;
        line-height: 20px;
        margin: 0 0 15px;
      }
      span{
        display: block;
        font-family: Muli;
        font-size: 14px;
        line-height: 22px;
      }
      a{
        text-transform: uppercase;
        display: inline-block;
        margin-top: 17px;
        font-weight: 500;
      }
    }
  }

  &.c-contact-us-block--common{
    ${({ theme }) => getBreakpointDown(theme.breakpoints, 'l', `
      height: calc(100% - 30px);
    `)}

    .c-contact-us-block{
      &__icon-wrap{
        ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
          display: none;
        `)}
      }

      &__info-wrap{
        ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
          padding-left: 0;
          border: none;
        `)}
      }
    }
  }

  &.c-contact-us-block--additional{

    .c-contact-us-block{
      &__icon-wrap{
        ${({ theme }) => getBreakpointDown(theme.breakpoints, 'l', `
          display: none;
        `)}
      }

      &__info-wrap{
        ${({ theme }) => getBreakpointDown(theme.breakpoints, 'l', `
          padding-left: 0;
          border: none;
        `)}
      }
    }
  }
`;