/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Default from './layouts/Default.jsx';

import { Home, NotFound } from './pages';

export default (store) => { // eslint-disable-line
  return (
    <Route path="/" component={Default}>
      { /* Home (main) route */ }
      <IndexRoute component={Home} />

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
