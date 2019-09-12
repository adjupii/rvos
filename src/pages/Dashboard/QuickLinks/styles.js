import styled from 'styled-components';

export default styled.div`
  margin-bottom: 50px;

  h2 {
    margin-left: 0;
    margin-bottom: 14px;
  }

  ul {
    margin: 0;
    padding: 25px;
    list-style: none;

    li {
      font: 14px/21px "Muli", sans-serif;
      display: flex;
      align-items: center;
      margin-bottom: 25px;

      &:last-child {
        margin-bottom: 0;
      }

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.main};
      }
    
      img {
        width: 20px;
        margin-right: 20px;
      }
    }
  }
`;