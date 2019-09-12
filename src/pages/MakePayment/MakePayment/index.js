import React, {
  useState,
  useCallback,
  useMemo
} from 'react';
import PropTypes from 'prop-types';

import { onAction } from './logic';

import { useAccountsGrouped } from 'app/hooks/billing';
import { getScenario } from 'app/helpers/make-payment';

import Title from 'app/components/Layouts/App/Title';
import {
  Row,
  Col
} from 'app/components/common/Grid';
import Head from '../Head';
import Card from 'app/components/common/Card';
import Steps from '../Steps';

const MakePayment = ({
  accounts,
  accountNumber: defaultAccountNumber,
  user
}) => {
  const
    [ fetching, setFetching ] = useState(false),

    [ accountNumber, setAccountNumber ] = useState(defaultAccountNumber),

    handleAction = useCallback(
      values => {
        onAction(setFetching, values);
      },
      [ setFetching ]
    ),

    accountsGrouped = useAccountsGrouped(accounts),

    accountsNumbers = Object.keys(accountsGrouped),

    account = (
      accountsGrouped[accountNumber]
      || (
        accountsNumbers.length === 1
          ? accountsGrouped[accountsNumbers[0]]
          : {}
      )
    ),

    scenario = useMemo(
      () => (
        getScenario(
          account.nextPaymentAmt,
          account.remainingBalance,
          account.pastDue
        )
      ),
      [ account ]
    );

  return (
    <>
      <Title
        title="Make a payment"
        back
      />

      <Row>
        <Col className="col-12 col-xl-10">
          <Card billet="entity-billingCenter">
            <Head
              accountName={account.accountName}
              accountNumber={account.accountNumber}
            />

            <Steps
              accounts={accounts}
              account={account}
              setAccountNumber={setAccountNumber}
              scenario={scenario}
              user={user}
              action={handleAction}
              buttonDisabled={fetching}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

MakePayment.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.object),
  accountNumber: PropTypes.string,
  user: PropTypes.object
};

export default MakePayment;