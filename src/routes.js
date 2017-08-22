/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Default from './layouts/Default.jsx';

import { 
  Home,
  About,
  OurProducts,
  GapInsurance,
  NotFound } from './pages';

export default (store) => { // eslint-disable-line
  return (
    <Route path="/" component={Default}>
      { /* Home (main) route */ }
      <IndexRoute component={Home} />

      <Route path="/about" component={About} />
      <Route path="/our-products" component={OurProducts}/>
      <Route path="/our-products/gap-insurance" components={GapInsurance}/>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
