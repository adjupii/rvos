import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

import Prev from 'app/components/Icons/Prev';

const Title = ({
  title,
  backAction
}) => (
  <Styled className="title">
    {
      backAction && (
        <Prev
          width="24"
          height="24"
          onClick={backAction}
          className="title__icon-back"
        />
      )
    }

    <h2>
      {title}
    </h2>
  </Styled>
);

Title.propTypes = {
  title: PropTypes.string,
  backAction: PropTypes.func
};

export default Title;