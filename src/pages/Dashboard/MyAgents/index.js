import React from 'react';
import PropTypes from 'prop-types';

import withSlider from 'app/components/Slider/withSlider';

import Styled from './styles';

import Card from 'app/components/common/Card';
import Title from 'app/components/Layouts/App/Title';
import Agent from 'app/components/Agent';
import Slider from 'app/components/Slider';
import SliderArrows from 'app/components/Slider/SliderArrows';

const MyAgents = ({
  agents,
  registerSlider,
  handleNext,
  handlePrevious
}) => (
  <Styled className="my-agents">
    <Title
      title="My Agent"
      className="c-app-title--in-dashboard"
    >
      {
        agents.length > 1 && (
          <SliderArrows
            handlePrevious={handlePrevious}
            handleNext={handleNext}
          />
        )
      }
    </Title>

    <Card>
      <Slider registerSlider={registerSlider}>
        {
          agents.map((agent, index) => (
            <Agent
              key={index}
              agent={agent}
            />
          ))
        }
      </Slider>
    </Card>
  </Styled>
);

MyAgents.propTypes = {
  agents: PropTypes.arrayOf(PropTypes.object),
  registerSlider: PropTypes.func,
  handleNext: PropTypes.func,
  handlePrevious: PropTypes.func
};

export default withSlider(MyAgents);