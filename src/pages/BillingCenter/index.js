import React, { useCallback } from 'react';
import { Redirect } from 'react-router';

import { useApi } from 'app/hooks/api';

import { getBillingAccounts } from 'app/api/billing';
import { getQuestions } from 'app/api/common-questions';
import { getQuickLinks } from 'app/api/quick-links';

import {
  Row,
  Col
} from 'app/components/common/Grid';
import Display from 'app/components/common/Display';
import Loader from 'app/components/common/Loader';
import Breadcrumbs from 'app/components/Breadcrumbs';
import H2 from 'app/components/Layouts/App/H2';
import BillingAccount from 'app/components/BillingAccount';
import NoData from 'app/components/EntityDetails/NoData';
import QuickLinks from 'app/components/common/QuickLinks';
import CommonQuestions from 'app/components/CommonQuestions';

const BillingCenter = () => {
  const
    api = useCallback(
      () => (
        Promise.all([
          getBillingAccounts(),
          getQuestions({ 'block_name': 'billing' }),
          getQuickLinks('billing')
        ])
      ),
      []
    ),

    [ fetching, data ] = useApi(api);

  if (fetching) {
    return <Loader />;
  }

  if (data) {
    const [
      billingAccounts,
      questions,
      quickLinks
    ] = data;

    if (billingAccounts.length === 1) {
      return (
        <Redirect to={`/app/billing/${billingAccounts[0].accountNumber}`} />
      );
    }

    return (
      <>
        <Breadcrumbs
          page="billingCenter"
          title="BILLING AND PAYMENT"
        />

        <H2>
          Billing Center
        </H2>

        <Row>
          <Col className="col-12 col-l-8 col-xl-9">
            {
              billingAccounts.length
                ? (
                  billingAccounts.map(billingAccount => (
                    <BillingAccount
                      key={billingAccount.accountNumber}
                      data={billingAccount}
                      location="billing-center"
                    />
                  ))
                )
                : (
                  <NoData iconName="BillingNoData">
                    You do not have any billing accounts
                  </NoData>
                )
            }
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
  }

  return null;
};

export default BillingCenter;