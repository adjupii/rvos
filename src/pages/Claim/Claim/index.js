import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'qs';

import TABS from '../tabs';

import { useTabs } from 'app/hooks/tabs';

import { joinedText } from 'app/format';

import {
  Row,
  Col
} from 'app/components/common/Grid';
import Display from 'app/components/common/Display';
import Card from 'app/components/common/Card';
import Tabs from 'app/components/Tabs';
import H2 from 'app/components/Layouts/App/H2';
import QuickLinks from 'app/components/common/QuickLinks';
import CommonQuestions from 'app/components/CommonQuestions';

const Claim = ({
  id,
  idType,
  claim,
  questions,
  quickLinksList
}) => {
  const
    { openTabIndex = 0 } = queryString.parse(location.search),

    {
      titles,
      tabs
    } = useTabs(claim.sections, TABS);

  return (
    <>
      <H2>
        {
          joinedText(
            [
              claim.claim.lossType,
              id
            ],
            { sep: ' | ' }
          )
        }
      </H2>

      <Row>
        <Col className="col-12 col-l-8 col-xl-9">
          <Card billet="entity-claims">
            <Tabs
              initialSelected={Number(openTabIndex)}
              titles={titles}
              className="tabs--in-card"
            >
              {
                tabs.map(tab => (
                  tab.render({
                    key: tab.key,
                    id,
                    idType,
                    section: claim.sections[tab.key]
                  })
                ))
              }
            </Tabs>
          </Card>
        </Col>

        <Col className="col-l-4 col-xl-3">
          <Display className="d-none d-l-block">
            <QuickLinks
              quickLinks={quickLinksList}
              pageName="claims"
            />

            <CommonQuestions questions={questions} />
          </Display>
        </Col>
      </Row>
    </>
  );
};

Claim.propTypes = {
  id: PropTypes.string,
  idType: PropTypes.string,
  claim: PropTypes.object,
  questions: PropTypes.arrayOf(PropTypes.object),
  quickLinksList: PropTypes.arrayOf(PropTypes.object)
};

export default Claim;