import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { useDocumentsWithTerms } from 'app/hooks/billing';

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

const BillingDocuments = ({
  accountNumber,
  documents,
  quickLinks,
  questions
}) => {
  const
    documentsWithTerms = useDocumentsWithTerms(documents),

    terms = Object.keys(documentsWithTerms),

    initialSlide = terms.length - 1,

    [ effectiveDate, setEffectiveDate ] = useState(terms[initialSlide]),

    handleAfterChange = useCallback(
      index => {
        setEffectiveDate(terms[index]);
      },
      [ setEffectiveDate, terms ]
    );

  return (
    <>
      <H2>
        {
          joinedText(
            [
              'Billing Documents',
              accountNumber
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
            className="slider--one-line-arrows slider--terms slider--billing-terms"
          >
            {
              terms.map(term => (
                <div
                  key={term}
                  className="slide"
                >
                  {term}
                </div>
              ))
            }
          </Slider>

          <TermsDocumentsTable data={documentsWithTerms[effectiveDate]} />
        </Col>

        <Col className="col-l-4 col-xl-3">
          <Display className="d-none d-l-block">
            <QuickLinks
              quickLinks={quickLinks}
              pageName="billingCenter"
            />

            <CommonQuestions questions={questions} />
          </Display>
        </Col>
      </Row>
    </>
  );
};

BillingDocuments.propTypes = {
  accountNumber: PropTypes.string,
  documents: PropTypes.arrayOf(PropTypes.object),
  quickLinks: PropTypes.arrayOf(PropTypes.object),
  questions: PropTypes.arrayOf(PropTypes.object)
};

export default BillingDocuments;