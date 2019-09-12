import styled from 'styled-components';

export default styled.div`
  &.status-bar {
    height: ${({ height }) => height};
    width: 100%;
    border-radius: 2px;
    position: relative;
    overflow: hidden;
    background: ${({ theme }) => theme.colors['grey-13']};

    &--success {
      .status-bar__bar {
        background: ${({ theme }) => theme.colors['green-1']};
      }
    }

    &--error {
      .status-bar__bar {
        background: ${({ theme }) => theme.colors['red-2']};
      }
    }

    .status-bar__bar {
      height: 100%;
      transition: width 0.3s;
    }
  }
`;