/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import { IndexRoute, Route, BrowserRouter as Router } from 'react-router-dom';

import Default from './layouts/Default.jsx';
import TermsDefault from './layouts/TermsDefault';
import TermsNotices from './pages/Terms & Policies/TermsNotices';

import { 
  Home,
  About,
  OurProducts,
  GapInsurance,
  Terms,
  NotFound } from './pages';

export default (store) => { // eslint-disable-line
  return (
    <Router>
      <div>
        <Route path="/" component={Default}>
          { /* Home (main) route */ }
          <Route exact component={Home} />

          <Route path="/about" component={About} />
          <Route path="/our-products" component={OurProducts} />
          <Route path="/our-products/gap-insurance" components={GapInsurance} />
          <Route path="/termsPolicies" components={TermsDefault} />
          { /* Catch all route */ }
          <Route path="*" component={NotFound} status={404} />
        </Route>
      </div>
    </Router>
  );
};
