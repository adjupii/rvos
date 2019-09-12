import styled from 'styled-components';

import Card from 'app/components/common/Card';

export default styled(Card)`
  margin-bottom: 30px;

  h3 {
    padding: 30px;
    border-bottom: 1px solid ${({ theme }) => theme.colors['grey-7']};
  }

  .info-card {
    &__content {
      padding: 30px 30px 0;
      font: 16px/27px "Muli", sans-serif;
      color: ${({ theme }) => theme.colors['grey-6']};

      p {
        margin: 0 0 30px;
      }

      ul {
        padding: 0;
        margin: 0 0 30px 30px;
      }
    }
  }
`;