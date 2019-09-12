import styled from 'styled-components';

export default styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors['grey-7']};
  display: flex;

  &.tabs-slider {
    &--with-buttons {
      .tabs-slider {
        &__tab {
          margin-left: 0;
          margin-right: 18px;
        }
      }
    }
  }

  .tabs-slider {
    &__btn {
      width: 50px;
      text-align: center;

      &-icon {
        fill: ${({ theme }) => theme.colors['grey-2']};
        cursor: pointer;
      }

      &--disabled {
        .tabs-slider__btn-icon {
          cursor: default;
          fill: ${({ theme }) => theme.colors['grey-16']};
        }
      }
    }

    &__inner {
      overflow-x: scroll;
      margin-bottom: -1px;

      &::-webkit-scrollbar {
        display: none;
      }

      overflow: -moz-scrollbars-none;
      -ms-overflow-style: none;
    }

    &__list {
      display: flex;
    }

    &__tab {
      height: 47px;
      position: relative;
      white-space: nowrap;
      margin-left: 18px;
      padding: 0 4px;
      font-size: 16px;
      line-height: 24px;

      &--selected {
        .tabs-slider__tab-border {
          display: block;
        }
      }

      &-title {
        cursor: pointer;
      }

      &-border {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: ${({ theme }) => theme.colors['red-2']};
        display: none;
      }
    }
  }
`;