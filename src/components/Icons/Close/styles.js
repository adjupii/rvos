import styled from 'styled-components';

import Icon from 'app/components/new/Icon';

export default styled(Icon)`
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }

  &.c-close--faq-search {
    flex-shrink: 0;
  }
`;