import styled from 'styled-components';

export default styled.div`
  ${({
    width,
    height
  }) => `
    width: ${width};
    height: ${height};
  `};

  &.avatar--no-default {
    border-radius: 50%;
    overflow: hidden;
  }
`;