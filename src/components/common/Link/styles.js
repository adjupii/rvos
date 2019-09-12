import styled from 'styled-components';

import { Text } from 'app/components/common/styled';

export default styled(Text)`
  &.link {
    text-decoration: underline;
    cursor: pointer;
  
    &:hover,
    &--no-underline {
      text-decoration: none;
    }

    &--disabled {
      cursor: default;
    }
  }
`;