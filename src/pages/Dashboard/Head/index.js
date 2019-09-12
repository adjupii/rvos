import React from 'react';
import PropTypes from 'prop-types';

import {
  joinedText,
  date
} from 'app/format';

import Styled from './styles';

import Avatar from 'app/components/common/Avatar';

const Head = ({
  firstName,
  avatar
}) => (
  <Styled className="dashboard-head">
    <Avatar avatar={avatar} />

    <div className="dashboard-head__title-holder">
      <div className="dashboard-head__title">
        {
          joinedText([
            'Welcome',
            firstName
          ])
        }
      </div>

      <div className="dashboard-head__date">
        {date(new Date())}
      </div>
    </div>
  </Styled>
);

Head.propTypes = {
  firstName: PropTypes.string,
  avatar: PropTypes.string
};

export default Head;