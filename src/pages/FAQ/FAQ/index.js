import React from 'react';
import PropTypes from 'prop-types';

import useInnerPages from 'app/hooks/useInnerPages';

import {
  Row,
  Col
} from 'app/components/common/Grid';
import Display from 'app/components/common/Display';
import H2 from 'app/components/Layouts/App/H2';
import Result from './Result';
import Search from './Search';
import QuickLinks from 'app/components/common/QuickLinks';

const FAQ = ({
  categories,
  quickLinks
}) => {
  const {
    pageName,
    handleChangePage
  } = useInnerPages('faq-result');

  return (
    <>
      <H2>
        Common Questions
      </H2>

      <Row>
        <Col className="col-12 col-l-8 col-xl-9">
          {
            pageName === 'faq-result' && (
              <Result
                categories={categories}
                handleChangePage={handleChangePage}
              />
            )
          }

          {
            pageName === 'faq-search' && (
              <Search handleChangePage={handleChangePage} />
            )
          }
        </Col>

        <Col className="col-l-4 col-xl-3">
          <Display className="d-none d-l-block">
            <QuickLinks
              quickLinks={quickLinks}
              pageName="commonQuestions"
            />
          </Display>
        </Col>
      </Row>
    </>
  );
};

FAQ.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  quickLinks: PropTypes.arrayOf(PropTypes.object)
};

export default FAQ;