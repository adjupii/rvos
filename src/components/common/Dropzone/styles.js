import styled from 'styled-components';

export default styled.div`
  outline: none;
  cursor: pointer;

  &.dropzone {
    &--is-disabled {
      cursor: default;
    }
  }
`;