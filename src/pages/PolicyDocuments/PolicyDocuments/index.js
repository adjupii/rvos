import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import {
  useDocumentsWithTerms,
  usePolicyStatus
} from 'app/hooks/policies';

import { joinedText } from 'app/format';

import H2 from 'app/components/Layouts/App/H2';
import {
  Row,
  Col
} from 'app/components/common/Grid';
import Display from 'app/components/common/Display';
import TermsDocumentsTable from 'app/components/TermsDocumentsTable';
import Slider from 'app/components/Slider';
import QuickLinks from 'app/components/common/QuickLinks';
import CommonQuestions from 'app/components/CommonQuestions';

const PolicyDocuments = ({
  policyNumber,
  policy,
  documents,
  quickLinks,
  questions
}) => {
  const
    {
      terms,
      documentsWithTerms
    } = useDocumentsWithTerms(documents, policy),

    [ effectiveDate, setEffectiveDate ] = useState(terms[1][0]),

    handleAfterChange = useCallback(
      index => {
        setEffectiveDate(Object.keys(documentsWithTerms)[index]);
      },
      [ setEffectiveDate, documentsWithTerms ]
    ),

    status = usePolicyStatus(policy.status),

    initialSlide = documentsWithTerms[terms[0][0]] ? 1 : 0;

  return (
    <>
      <H2>
        {
          joinedText(
            [
              'Policy Documents',
              policyNumber
            ],
            { sep: ' | ' }
          )
        }
      </H2>

      <Row>
        <Col className="col-12 col-l-8 col-xl-9">
          <Slider
            initialSlide={initialSlide}
            arrows={true}
            infinite={false}
            afterChange={handleAfterChange}
            className="slider--one-line-arrows slider--terms slider--policy-terms"
          >
            {
              terms.map((term, i) => {
                if (
                  i === 1
                  || (
                    status === 'active'
                    && documentsWithTerms[term[0]]
                  )
                ) {
                  return (
                    <div
                      key={term[0]}
                      className="slide"
                    >
                      {
                        joinedText(
                          [ term[0], term[1] ],
                          { sep: ' - ' }
                        )
                      }
                    </div>
                  );
                }

                return null;
              })
            }
          </Slider>

          <TermsDocumentsTable data={documentsWithTerms[effectiveDate]} />
        </Col>

        <Col className="col-l-4 col-xl-3">
          <Display className="d-none d-l-block">
            <QuickLinks
              quickLinks={quickLinks}
              pageName="policies"
            />

            <CommonQuestions questions={questions} />
          </Display>
        </Col>
      </Row>
    </>
  );
};

PolicyDocuments.propTypes = {
  policyNumber: PropTypes.string,
  policy: PropTypes.object,
  documents: PropTypes.arrayOf(PropTypes.object),
  quickLinks: PropTypes.arrayOf(PropTypes.object),
  questions: PropTypes.arrayOf(PropTypes.object)
};

export default PolicyDocuments;