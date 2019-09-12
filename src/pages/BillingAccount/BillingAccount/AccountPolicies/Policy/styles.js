import styled from 'styled-components';

export default styled.div`
  margin-bottom: -24px;

  &.policy {
    &--no-last {
      border-bottom: 1px dashed ${({ theme }) => theme.colors['grey-7']};
      margin-bottom: 24px;
    }
  }

  .entity-details-info {
    margin-bottom: 24px;
  }
`;