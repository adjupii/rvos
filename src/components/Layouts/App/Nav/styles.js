import styled from 'styled-components';

export default styled.nav`
  display: flex;
  margin-left: 40px;

  .nav {
    &__link {
      font: 600 14px/18px "Muli", sans-serif;
      color: #fff;
      text-decoration: none;
      margin-left: 60px;
      opacity: 0.7;
 
      &:hover,
      &--active {
        opacity: 1;
      }
    }
  }
`;