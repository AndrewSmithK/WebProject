import React from 'react';
import { IndexRoute, Route } from 'react-router';

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
  NotFound } from './pages';

export default () => (
  <Route path="/" component={Default}>
    { /* Home (main) route */ }
    <IndexRoute component={Home} />

    <Route path="/about" component={About} />
    <Route path="/our-products" component={OurProducts} />
    <Route path="/our-products/gap-insurance" component={GapInsurance} />
    <Route path="/terms-policies" component={TermsDefault}>
      <IndexRoute component={TermsNotices} />
      <Route path="/terms-policies/cookie-policy" component={TermsCookies} />
      <Route path="/terms-policies/conflicts" component={TermsConflicts} />
      <Route path="/terms-policies/data" component={TermsDataPrivacy} />
      <Route path="/terms-policies/notification" component={TermsClaimNotif} />
      <Route path="/terms-policies/complaints" component={TermsComplaints} />
      <Route path="/terms-policies/FAQ" component={TermsNotices} />
    </Route>
    { /* Catch all route */ }
    <Route path="*" component={NotFound} status={404} />
  </Route>
);
