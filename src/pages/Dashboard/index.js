import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { useApi } from 'app/hooks/api';

import { getBillingAccounts } from 'app/api/billing';
import { getPolicies } from 'app/api/policies';
import { getClaims } from 'app/api/claims';
import { getAgents } from 'app/api/user';
import { getQuestions } from 'app/api/common-questions';
import { getQuickLinks } from 'app/api/quick-links';

import Loader from 'app/components/common/Loader';
import Head from './Head';
import Dashboard from './Dashboard';

const DashboardContainer = () => {
  const {
    customer = {},
    avatar
  } = useSelector(state => state.user.data);

  const
    api = useCallback(
      () => (
        Promise.all([
          getBillingAccounts(),
          getPolicies(),
          getClaims(),
          getAgents(),
          getQuickLinks('dashboard'),
          getQuestions({ 'block_name': 'dashboard' })
        ])
      ),
      []
    ),

    [ fetching, data ] = useApi(api);

  return (
    <>
      <Head
        firstName={customer.firstName}
        avatar={avatar}
      />

      {
        fetching
          ? <Loader />
          : data
            ? <Dashboard data={data} />
            : null
      }
    </>
  );
};

export default DashboardContainer;