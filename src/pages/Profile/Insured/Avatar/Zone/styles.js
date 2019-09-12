import styled from 'styled-components';

export default styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  position: relative;

  &.upload-avatar {
    &--is-drag-active,
    &:hover {
      .upload-avatar__mask {
        display: flex;
      }
    }
  
    &--is-loading {
      &:hover {
        .upload-avatar__mask {
          display: none;
        }
      }
    }
  }

  .upload-avatar__mask {
    display: none;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(93, 101, 119, 0.6);
  }
`;