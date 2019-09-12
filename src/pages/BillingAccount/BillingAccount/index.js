import React from 'react';
import PropTypes from 'prop-types';

import { TITLES } from './tabs';

import { useAccountType } from 'app/hooks/billing';

import {
  Row,
  Col
} from 'app/components/common/Grid';
import Display from 'app/components/common/Display';
import H2 from 'app/components/Layouts/App/H2';
import Head from 'app/components/BillingAccount/Head';
import Card from 'app/components/common/Card';
import Tabs from 'app/components/Tabs';
import BillingSummary from './BillingSummary';
import UpcomingPayments from './UpcomingPayments';
import AccountHistory from './AccountHistory';
import AccountPolicies from './AccountPolicies';
import QuickLinks from 'app/components/common/QuickLinks';

const BillingAccount = ({
  accountNumber,
  billing,
  quickLinks
}) => {
  const
    {
      billToType,
      remainingBalance,
      warningMessage
    } = billing,

    billingType = useAccountType(
      billToType,
      remainingBalance
    );

  return (
    <>
      <H2>
        RVOS Billing
      </H2>

      <Row>
        <Col className="col-12 col-l-8 col-xl-9">
          <Card billet="entity-billingCenter">
            <Head
              accountNumber={accountNumber}
              billingType={billingType}
              warningMessage={warningMessage}
            />

            <Tabs
              titles={TITLES}
              className="tabs--in-card"
            >
              <BillingSummary
                accountNumber={accountNumber}
                billingType={billingType}
              />

              <UpcomingPayments accountNumber={accountNumber} />

              <AccountHistory accountNumber={accountNumber} />

              <AccountPolicies accountNumber={accountNumber} />
            </Tabs>
          </Card>
        </Col>

        <Col className="col-l-4 col-xl-3">
          <Display className="d-none d-l-block">
            <QuickLinks
              quickLinks={quickLinks}
              pageName="billingCenter"
            />
          </Display>
        </Col>
      </Row>
    </>
  );
};

BillingAccount.propTypes = {
  accountNumber: PropTypes.string,
  billing: PropTypes.object,
  quickLinks: PropTypes.arrayOf(PropTypes.object)
};

export default BillingAccount;