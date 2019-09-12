import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

import Title from 'app/components/Layouts/Sign/Title';
import FormText from 'app/components/Layouts/FormText';
import Submit from 'app/components/common/Form/Submit';

import Letter from 'app/components/Icons/Letter';
import LetterError from 'app/components/Icons/LetterError';
import Loader from 'app/components/Icons/Loader';
import Amazing from 'app/components/Icons/Amazing';

const ICONS = {
  Letter,
  LetterError,
  Loader,
  Amazing
};

const FormMessage = ({
  title,
  text,
  buttonText,
  iconName,
  action,
  children
}) => {
  const Icon = ICONS[iconName];

  return (
    <Styled className="form-message">
      <Title title={title} />

      <div className="form-message__content">
        <div className="form-message__icon">
          <Icon
            width="110"
            height="110"
          />
        </div>

        {
          children
            ? children
            : (
              <FormText>
                {text}
              </FormText>
            )
        }
      </div>

      {
        action && (
          <Submit
            type="button"
            onClick={action}
          >
            {buttonText}
          </Submit>
        )
      }
    </Styled>
  );
};

FormMessage.propTypes = {
  title: PropTypes.string,
  text: PropTypes.oneOfType([ PropTypes.string, PropTypes.node ]),
  buttonText: PropTypes.string,
  iconName: PropTypes.string,
  action: PropTypes.func,
  children: PropTypes.node
};

export default FormMessage;