import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useDialog from 'app/hooks/useDialog';

import Styled from './styles';

import H2 from 'app/components/Layouts/App/H2';
import Card from 'app/components/common/Card';
import QuestionInCircle from 'app/components/Icons/QuestionInCircle';

const CommonQuestions = ({
  questions,
  titleClassName
}) => {
  const
    { openDialog } = useDialog(),

    handleOpenDialog = useCallback(
      (id, question, answer) => () => {
        openDialog(
          id,
          {
            title: question,
            children: (
              <div dangerouslySetInnerHTML={{ __html: answer }} />
            ),
            className: 'c-dialog--common-question'
          }
        );
      },
      [ openDialog ]
    ),

    h2ClassName = classNames(
      'c-app-h2--common-questions',
      titleClassName
    );

  return (
    <Styled className="common-questions">
      <H2 className={h2ClassName}>
        Common Questions
      </H2>

      <Card>
        <div className="common-questions__inner">
          {
            questions.map(({
              id,
              question,
              answer
            }) => {
              const dialogId = `question-dialog-${id}`;

              return (
                <div
                  key={id}
                  className="common-questions__item"
                >
                  <QuestionInCircle
                    width="14"
                    height="14"
                    className="common-questions__item-icon"
                  />

                  <div
                    onClick={
                      handleOpenDialog(
                        dialogId,
                        question,
                        answer
                      )
                    }
                    className="common-questions__item-question"
                  >
                    {question}
                  </div>
                </div>
              );
            })
          }
        </div>
      </Card>
    </Styled>
  );
};

CommonQuestions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object),
  titleClassName: PropTypes.string
};

export default CommonQuestions;