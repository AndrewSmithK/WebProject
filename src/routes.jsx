import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Default from './layouts/Default';
import TermsDefault from './layouts/TermsDefault';
import TermsNotices from './pages/Terms & Policies/TermsNotices';

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
    <Route path="/our-products/gap-insurance" components={GapInsurance} />
    <Route path="/termsPolicies" components={TermsDefault}>
      <Route path="/notices" components={TermsNotices} />
    </Route>
    { /* Catch all route */ }
    <Route path="*" component={NotFound} status={404} />
  </Route>
);
