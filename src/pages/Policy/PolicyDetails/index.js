import React from 'react';
import PropTypes from 'prop-types';

import TABS from './tabs';

import { useTabs } from 'app/hooks/tabs';

import Card from 'app/components/common/Card';
import Tabs from 'app/components/Tabs';
import Section from './Section';
import NoData from 'app/components/EntityDetails/NoData';
import { Link } from 'app/components/common/Button';

const PolicyDetails = ({
  policyNumber,
  sections,
  selectedTerm
}) => {
  const {
    titles,
    tabs
  } = useTabs(sections, TABS);

  return (
    <Card billet="entity-policies">
      {
        tabs
          ? (
            <Tabs
              titles={titles}
              withSlider
              className="tabs--in-card"
            >
              {
                tabs.map(({ key }) => (
                  <Section
                    key={key}
                    sectionKey={key}
                    policyNumber={policyNumber}
                    selectedTerm={selectedTerm}
                  />
                ))
              }
            </Tabs>
          )
          : (
            <NoData iconName="PoliciesNoData">
              <p>
                For detail information about your commercial policy,<br />please view the policy documents
              </p>

              <Link to={`/app/policies/${policyNumber}/documents`}>
                SEE POLICY DOCUMENTS
              </Link>
            </NoData>
          )
      }
    </Card>
  );
};

PolicyDetails.propTypes = {
  policyNumber: PropTypes.string,
  sections: PropTypes.object,
  selectedTerm: PropTypes.string
};

export default PolicyDetails;