import styled from 'styled-components';

import Card from 'app/components/common/Card';

export default styled(Card)`
  display: flex;
  align-items: center;
  padding: 22px 40px;
  margin-bottom: 20px;

  .dashboard-no-data {
    &__icon {
      margin-right: 40px;
    }

    &__text {
      font-size: 16px;
      line-height: 27px;
    }
  }
`;