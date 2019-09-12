import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { phone } from 'app/format';

import Styled from './styles';

import Avatar from 'app/components/common/Avatar';
import ContactUs from 'app/components/Icons/ContactUs';

const Agent = ({
  agent,
  className
}) => {
  const agentPhone = agent.phone || agent.altPhone;

  return (
    <Styled
      className={
        classNames(
          'agent',
          className
        )
      }
    >
      <div className="agent__avatar-holder">
        <div className="agent__avatar-box">
          <Avatar avatar={agent.avatar} />
        </div>
      </div>
  
      <div className="agent__holder">
        <div className="agent__name">
          {agent.fullName}
        </div>

        {
          agentPhone && (
            <div className="agent__phone-holder">
              <ContactUs
                width="19"
                height="19"
                className="agent__icon"
              />
      
              <div className="agent__phone">
                {phone(agentPhone)}
              </div>
            </div>
          )
        }
      </div>
    </Styled>
  );
};

Agent.propTypes = {
  agent: PropTypes.object,
  className: PropTypes.string
};

export default Agent;