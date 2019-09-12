import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  line-height: 24px;
  height: 65px;
  padding: 0 24px;
  cursor: pointer;
  border-top: 1px solid ${({ theme }) => theme.colors['grey-7']};

  &.tab-accordion {
    &--first {
      border-top: none;
    }

    &--selected {
      border-bottom: 1px solid ${({ theme }) => theme.colors['grey-7']};
    }
  }
  
  order: ${({ order }) => order};
`;