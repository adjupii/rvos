import React from 'react';
import PropTypes from 'prop-types';

import { useClaims } from 'app/hooks/claims';

import {
  Row,
  Col
} from 'app/components/common/Grid';
import Display from 'app/components/common/Display';
import Title from 'app/components/Layouts/App/Title';
import { Link } from 'app/components/common/Button';
import ClaimList from '../ClaimList';
import ClaimListTitle from '../ClaimList/Title';
import QuickLinks from 'app/components/common/QuickLinks';
import NoData from 'app/components/EntityDetails/NoData';
import CommonQuestions from 'app/components/CommonQuestions';

const Claims = ({
  claims,
  questions,
  quickLinks
}) => {
  const
    openClaims = useClaims(claims, 'active'),

    closedClaims = useClaims(claims, 'closed');

  return (
    <>
      <Row>
        <Col className="col-12 col-l-8 col-xl-9">
          <Title
            title="Claim Center"
            className="c-app-title--claim-center"
          >
            <Link
              to="/app/claims/claim/create"
              className="button--size-big"
            >
              NEW CLAIM
            </Link>
          </Title>
        </Col>
      </Row>


      <Row>
        <Col className="col-12 col-l-8 col-xl-9">
          {
            claims.length
              ? (
                <>
                  {
                    openClaims.length && (
                      <>
                        <ClaimListTitle>
                          Open Claims
                        </ClaimListTitle>

                        <ClaimList claims={openClaims} />
                      </>
                    )
                  }

                  {
                    closedClaims.length && (
                      <>
                        <ClaimListTitle>
                          Closed Claims
                        </ClaimListTitle>

                        <ClaimList claims={closedClaims} />
                      </>
                    )
                  }
                </>
              )
              : (
                <NoData iconName="ClaimsNoData">
                  You do not have any claims
                </NoData>
              )
          }
        </Col>

        <Col className="col-l-4 col-xl-3">
          <Display className="d-none d-l-block">
            <QuickLinks
              quickLinks={quickLinks}
              pageName="claims"
            />

            <CommonQuestions questions={questions} />
          </Display>
        </Col>
      </Row>
    </>
  );
};

Claims.propTypes = {
  claims: PropTypes.arrayOf(PropTypes.object),
  questions: PropTypes.arrayOf(PropTypes.object),
  quickLinks: PropTypes.arrayOf(PropTypes.object)
};

export default Claims;