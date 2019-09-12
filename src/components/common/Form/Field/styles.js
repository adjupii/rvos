import styled from 'styled-components';

export default styled.div`
  &.form-field {
    position: relative;
    height: 45px;
    line-height: 19px;
    width: 100%;
  
    input:not([readonly]):focus {
      &~label {
        top: -23px;
        font-size: 11px;
        color: ${({ theme }) => theme.colors['grey-3']};
      }
    }
  
    &--is-error {
      input {
        border-color: ${({ theme }) => theme.colors['red-1']};
      }
    }
  
    &--is-error {
      input,
      input:not([readonly]):focus {
        &~label {
          color: ${({ theme }) => theme.colors['red-1']};
        }
      }
    }
  
    label {
      color: ${({ theme }) => theme.colors['grey-5']};
      font-size: 14px;
      position: absolute;
      left: 0;
      top: 0;
      transition: 0.2s ease all;
      pointer-events: none;
    }

    &--is-not-empty {
      label {
        top: -23px;
        font-size: 11px;
        color: ${({ theme }) => theme.colors['grey-3']};
      }
    }

    &--with-eye {
      input {
        padding-right: 30px;
      }
    }

    &--with-select {
      input {
        padding-right: 30px;
        position: relative;
        cursor: pointer;
        z-index: 2;
      }
    }
  }

  .form-field {
    &__static {
      font-size: 16px;
      line-height: 21px;
      color: ${({ theme }) => theme.colors['grey-4']};
    }

    &__eye-icon {
      position: absolute;
      bottom: 20px;
      right: 0;
      cursor: pointer;
      fill: ${({ theme }) => theme.colors['grey-5']};
    }

    &__arrow-down-icon {
      position: absolute;
      bottom: 20px;
      right: 0;
    }

    &__error {
      font-size: 11px;
      color: ${({ theme }) => theme.colors['red-1']};
    }
  }
`;