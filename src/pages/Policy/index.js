import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import {
  getPolicy,
  getPolicyTerms,
  getPolicyAgent
} from 'app/api/policies';
import { getBillingForPolicy } from 'app/api/billing';
import { getQuickLinks } from 'app/api/quick-links';

import { useApi } from 'app/hooks/api';

import { date } from 'app/format';

import Breadcrumbs from 'app/components/Breadcrumbs';
import Loader from 'app/components/common/Loader';
import Policy from './Policy';

const PolicyContainer = ({
  match: {
    params: { policyNumber }
  }
}) => {
  const
    [ selectedTerm, setTerm ] = useState(),

    policyApis = useCallback(
      () => {
        const params = {
          asOfDate: date(selectedTerm, 'MM-DD-YYYY') || selectedTerm
        };

        return (
          Promise.all([
            getPolicy(policyNumber, params),
            getBillingForPolicy(policyNumber, params)
          ])
        );
      },
      [ policyNumber, selectedTerm ]
    ),

    otherApis = useCallback(
      () => (
        Promise.all([
          getPolicyTerms(policyNumber),
          getPolicyAgent(policyNumber),
          getQuickLinks('policy')
        ])
      ),
      [ policyNumber ]
    ),

    [ fetchingPolicy, policy ] = useApi(policyApis),

    [ fetchingOther, other ] = useApi(otherApis);

  return (
    <>
      <Breadcrumbs
        page="policies"
        title="POLICIES"
      />

      {
        (fetchingPolicy || fetchingOther)
        && (!policy || !other)
          ? <Loader />
          : policy && other
            ? (
              <Policy
                policyNumber={policyNumber}
                policy={policy[0]}
                billing={policy[1]}
                terms={other[0]}
                agent={other[1]}
                quickLinks={other[2]}
                selectedTerm={selectedTerm}
                setTerm={setTerm}
                fetching={fetchingPolicy}
              />
            )
            : null
      }
    </>
  );
};

PolicyContainer.propTypes = {
  match: PropTypes.object
};

export default PolicyContainer;