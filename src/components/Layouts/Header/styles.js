import styled from 'styled-components';

export default styled.header`
  position: fixed;
  z-index: 9998;
  width: 100%;
  background: #3F4245;
  box-shadow: 0 2px 64px 0 rgba(194, 198, 210, 0.2);

  .header {
    &__holder {
      height: 70px;
      display: flex;
      align-items: center;
    }

    &__toggle-nav {
      fill: #fff;
      cursor: pointer;
      margin-right: 27px;
    }
  }
`;