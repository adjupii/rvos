import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Router as BaseRouter } from 'react-router';
import history from './history';

import SignLayout from './components/Layouts/Sign';
import AppLayout from './components/Layouts/App';

import Sign from './pages/Sign';
import RestorePassword from './pages/RestorePassword';
import RestoreUsername from './pages/RestoreUsername';
import ConfirmEmail from './pages/ConfirmEmail';
import Profile from './pages/Profile';
import ProfileConfirmEmail from './pages/Profile/ConfirmEmail';
import Policies from './pages/Policies';
import Policy from './pages/Policy';
import UpdatePolicy from './pages/UpdatePolicy';
import Claims from './pages/Claims';
import Claim from './pages/Claim';
import NewClaim from './pages/NewClaim';
import BillingCenter from './pages/BillingCenter';
import Dashboard from './pages/Dashboard';
import PolicyDocuments from './pages/PolicyDocuments';
import BillingAccount from './pages/BillingAccount';
import MakePayment from './pages/MakePayment';
import BillingDocuments from 'app/pages/BillingDocuments';
import Documents from './pages/Documents';
import AutoSignIn from './pages/AutoSignIn';
import FAQ from './pages/FAQ';
import ContactUs from './pages/ContactUs';
import ContactUsForm from './pages/ContactUsForm';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsUse from './pages/TermsUse';

const Router = () => (
  <BaseRouter history={history}>
    <Switch>
      <Route
        exact
        path='/'
        render={() => <Redirect to='/app/dashboard' />}
      />

      <Route path='/sign'>
        {
          props => (
            <SignLayout {...props}>
              <Switch>
                <Route
                  path={`${props.match.url}/in`}
                  component={Sign}
                />
                <Route
                  path={`${props.match.url}/restore-password/:token`}
                  component={RestorePassword}
                />
                <Route
                  path={`${props.match.url}/restore-username/:token`}
                  component={RestoreUsername}
                />
                <Route
                  path={`${props.match.url}/confirm-email/:token`}
                  component={ConfirmEmail}
                />
              </Switch>
            </SignLayout>
          )
        }
      </Route>

      <Route path='/app'>
        {
          props => (
            <AppLayout {...props}>
              <Switch>
                <Route
                  path={`${props.match.url}/profile`}
                  component={Profile}
                />
                <Route
                  path={`${props.match.url}/dashboard`}
                  component={Dashboard}
                />
                <Route
                  exact
                  path={`${props.match.url}/policies`}
                  component={Policies}
                />
                <Route
                  exact
                  path={`${props.match.url}/policies/:policyNumber`}
                  component={Policy}
                />
                <Route
                  exact
                  path={`${props.match.url}/policies/:policyNumber/documents`}
                  component={PolicyDocuments}
                />
                <Route
                  exact
                  path={`${props.match.url}/policies/:policyNumber/update`}
                  component={UpdatePolicy}
                />
                <Route
                  exact
                  path={`${props.match.url}/claims`}
                  component={Claims}
                />
                <Route
                  exact
                  path={`${props.match.url}/claims/:id`}
                  component={Claim}
                />
                <Route
                  path={`${props.match.url}/claims/claim/create`}
                  component={NewClaim}
                />
                <Route
                  exact
                  path={`${props.match.url}/billing`}
                  component={BillingCenter}
                />
                <Route
                  exact
                  path={`${props.match.url}/billing/:accountNumber`}
                  component={BillingAccount}
                />
                <Route
                  exact
                  path={`${props.match.url}/billing/:accountNumber/documents`}
                  component={BillingDocuments}
                />
                <Route
                  exact
                  path={`${props.match.url}/billing/account/payment`}
                  component={MakePayment}
                />
                <Route
                  exact
                  path={`${props.match.url}/billing/account/payment/:accountNumber`}
                  component={MakePayment}
                />
                <Route
                  path={`${props.match.url}/documents`}
                  component={Documents}
                />
                <Route
                  path={`${props.match.url}/common-questions`}
                  component={FAQ}
                />
                <Route
                  exact
                  path={`${props.match.url}/contact-us`}
                  component={ContactUs}
                />
                <Route
                  path={`${props.match.url}/contact-us/request`}
                  component={ContactUsForm}
                />
                <Route
                  path={`${props.match.url}/terms-use`}
                  component={TermsUse}
                />
                <Route
                  path={`${props.match.url}/privacy-policy`}
                  component={PrivacyPolicy}
                />
              </Switch>
            </AppLayout>
          )
        }
      </Route>

      <Route
        path='/profile/confirm-email/:token'
        component={ProfileConfirmEmail}
      />

      <Route
        path='/auto-sign-in/:token'
        component={AutoSignIn}
      />
    </Switch>
  </BaseRouter>
);

export default Router;