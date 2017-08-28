import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Default from './layouts/Default';
import TermsDefault from './layouts/TermsDefault';

import {
  Home,
  About,
  OurProducts,
  GapInsurance,
  ContactUs,
  NotFound,
  TermsNotices,
  TermsCookies,
  TermsConflicts,
  TermsDataPrivacy,
  TermsClaimNotif,
  TermsComplaints } from './pages';

const DefaultLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <Default>
        <Component {...matchProps} />
      </Default>
    )} />
  )
};

const TermsLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <Default>
        <TermsDefault>
          <Component {...matchProps} />
        </TermsDefault>
      </Default>
    )} />
  )
};

export default () => (
  <Switch>
    { /* Home (main) route */ }
    <DefaultLayout exact path="/" component={Home} />
    <DefaultLayout path="/about" component={About} />
    <DefaultLayout path="/contact-us" component={ContactUs} />
    <DefaultLayout exact path="/our-products" component={OurProducts} />
    <DefaultLayout path="/our-products/gap-insurance" component={GapInsurance} />
    <TermsLayout exact path="/terms-policies" component={TermsNotices} />
    <TermsLayout exact path="/terms-policies/cookie-policy" component={TermsCookies} />
    <TermsLayout exact path="/terms-policies/conflicts" component={TermsConflicts} />
    <TermsLayout exact path="/terms-policies/data" component={TermsDataPrivacy} />
    <TermsLayout exact path="/terms-policies/notification" component={TermsClaimNotif} />
    <TermsLayout exact path="/terms-policies/complaints" component={TermsComplaints} />
    { /* Catch all route */ }
    <Route component={NotFound} status={404} />
  </Switch>
);
