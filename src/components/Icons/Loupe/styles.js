import styled from 'styled-components';

import Icon from 'app/components/new/Icon';

export default styled(Icon)`
  fill: #525C65;
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }

  &.c-loupe--faq-search {
    flex-shrink: 0;
  }
`;