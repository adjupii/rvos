import styled from 'styled-components';
import {
  getBreakpointDown
} from 'app/styles';

import Card from 'app/components/common/Card';

export default styled(Card)`
  padding: 30px;
  ${({ theme }) => getBreakpointDown(theme.breakpoints, 'xl', `
    margin-bottom: 25px;
  `)}

  h3 {
    padding: 0 0 26px;
    margin-bottom: 18px;
    border-bottom: 1px solid ${({ theme }) => theme.colors['grey-7']};
  }

  .entity-details-info {
    &__label {
      font-size: 11px;
      margin-bottom: 4px;
    }

    &__change-holder {
      display: flex;
      justify-content: space-between;
    }

    &__change-link {
      font-size: 12px;
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.link};

      &:hover {
        cursor: pointer;
        text-decoration: none;
      }
    }
  }

  .profile-card {
    &__info-holder {
      margin-top: 25px;
    }
  }  
`;