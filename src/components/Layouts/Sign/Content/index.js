import styled from 'styled-components';

export default styled.div`
  color: ${({ theme }) => theme.colors['grey-2']};
  line-height: 21px;

  form {
    min-height: 436px;
    padding-bottom: 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    button[type="submit"] {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    form{
      height: 436px;
    }
  }
`;