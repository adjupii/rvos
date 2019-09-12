import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'app/components/Slider';
import SliderArrows from 'app/components/Slider/SliderArrows';
import ClaimPolicy from './ClaimPolicy';
import FormText from 'app/components/Layouts/FormText';

const Form = ({
  values,
  handleChange,
  policies,
  registerSlider,
  handlePrevious,
  handleNext
}) => (
  <form autoComplete="off">
    {
      policies.length > 1 && (
        <SliderArrows
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          className="create-claim-policy"
        />
      )
    }

    {
      policies.length
        ? (
          <Slider
            registerSlider={registerSlider}
            className="slider--new-claim-policy"
          >
            {
              policies.map(policy => (
                <div
                  key={policy.policyNumber}
                  className="slide"
                >
                  <ClaimPolicy
                    name="policyNo"
                    id={policy.policyNumber}
                    value={values.policyNo}
                    onChange={handleChange}
                    policy={policy}
                  />
                </div>
              ))
            }
          </Slider>
        )
        : (
          <FormText>
            We cannot locate a policy for the entered loss type and loss date. Please check the information you entered. If the information is correct, please contact your agent or RVOS Customer Service for assistance.
          </FormText>
        )
    }
  </form>
);

Form.propTypes = {
  policies: PropTypes.arrayOf(PropTypes.object),
  values: PropTypes.object,
  handleChange: PropTypes.func,
  registerSlider: PropTypes.func,
  handlePrevious: PropTypes.func,
  handleNext: PropTypes.func
};

export default Form;