/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Default from './layouts/Default.jsx';
import TermsDefault from './layouts/TermsDefault';

import { 
  Home,
  About,
  OurProducts,
  GapInsurance,
  Terms,
  NotFound } from './pages';

export default (store) => { // eslint-disable-line
  return (
    <Route path="/" component={Default}>
      { /* Home (main) route */ }
      <IndexRoute component={Home} />

      <Route path="/about" component={About} />
      <Route path="/our-products" component={OurProducts}/>
      <Route path="/our-products/gap-insurance" components={GapInsurance}/>
      <Route path="/termsPolicies" components={TermsDefault}/>
        <Route path="/termsPolicies/notices" components={Terms}/>
      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
