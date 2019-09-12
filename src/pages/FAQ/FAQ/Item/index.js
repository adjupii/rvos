import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useToggle } from 'app/hooks/toggle';

import Styled from './styles';

import Question from 'app/components/Icons/Nav/CommonQuestions';
import Expander from 'app/components/common/Expander';

const FAQItem = ({ data }) => {
  const [ isOpen, toggleIsOpen ] = useToggle();

  const componentClassName = classNames(
    'c-faq-item',
    { 'c-faq-item--is-open': isOpen }
  );

  return (
    <Styled className={componentClassName}>
      <div
        onClick={toggleIsOpen}
        className="c-faq-item__head"
      >
        <div className="c-faq-item__head-icon">
          <Question
            width="24"
            height="24"
          />
        </div>

        <div className="c-faq-item__head-inner">
          <div className="c-faq-item__question">
            {data.question}
          </div>

          <Expander isExpanded={isOpen} />
        </div>
      </div>

      {
        isOpen && (
          <div
            dangerouslySetInnerHTML={{ __html: data.answer }}
            className="c-faq-item__body"
          />
        )
      }
    </Styled>
  );
};

FAQItem.propTypes = {
  data: PropTypes.object
};

export default FAQItem;