import styled from 'styled-components';

import Card from 'app/components/common/Card';

export default styled(Card)`
  margin-bottom: 30px;

  .c-quick-licks {
    &__inner {
      padding: 30px;
    }
  }

  h3 {
    margin: 0 0 30px;
    padding: 0 0 25px;
    border-bottom: 1px solid ${({ theme }) => theme.colors['grey-7']};
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin-bottom: 15px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;