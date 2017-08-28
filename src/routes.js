import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Default from './layouts/Default';
import TermsDefault from './layouts/TermsDefault';

import TermsNotices from './pages/TermsPolicies/TermsNotices';
import TermsCookies from './pages/TermsPolicies/TermsCookies';
import TermsConflicts from './pages/TermsPolicies/TermsConflicts';
import TermsDataPrivacy from './pages/TermsPolicies/TermsDataPrivacy';
import TermsClaimNotif from './pages/TermsPolicies/TermsClaimNotif';
import TermsComplaints from './pages/TermsPolicies/TermsComplaints';

import {
  Home,
  About,
  OurProducts,
  GapInsurance,
  ContactUs,
  NotFound,
  Signin } from './pages';

export default () => (
  <Default>
    { /* Home (main) route */ }
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact-us" component={ContactUs} />
      <Route exact path="/our-products" component={OurProducts} />
      <Route path="/our-products/gap-insurance" component={GapInsurance} />
      <Route path="/signin" component={Signin} />
      <TermsDefault>
        <Switch>
          <Route exact path="/terms-policies" component={TermsNotices} />
          <Route path="/terms-policies/cookie-policy" component={TermsCookies} />
          <Route path="/terms-policies/conflicts" component={TermsConflicts} />
          <Route path="/terms-policies/data" component={TermsDataPrivacy} />
          <Route path="/terms-policies/notification" component={TermsClaimNotif} />
          <Route path="/terms-policies/complaints" component={TermsComplaints} />
          <Route path="/terms-policies/FAQ" component={TermsNotices} />
        </Switch>
      </TermsDefault>
      { /* Catch all route */ }
    </Switch>
      <Route component={NotFound} status={404} />
  </Default>
);
