import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  .breadcrumbs {
    &__prev {
      cursor: pointer;
    }

    &__color {
      width: 10px;
      height: 10px;
      border-radius: 2px;
      margin-right: 5px;
      margin-left: 10px;
      background: ${({ theme, page }) => theme.colors[`entity-${page}`]};
    }
  }
`;