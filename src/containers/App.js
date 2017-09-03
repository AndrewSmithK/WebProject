import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Default from '../layouts/Default';
import TermsDefault from '../layouts/TermsDefault';
import NotFound from '../components/NotFound';

import Home from './Home';
import About from './About';
import OurProducts from './OurProducts';
import GapInsurance from './GAP Insurance';
import ContactUs from './ContactUs';
import TermsNotices from './TermsPolicies/TermsNotices';
import TermsCookies from './TermsPolicies/TermsCookies';
import TermsConflicts from './TermsPolicies/TermsConflicts';
import TermsDataPrivacy from './TermsPolicies/TermsDataPrivacy';
import TermsClaimNotif from './TermsPolicies/TermsClaimNotif';
import TermsComplaints from './TermsPolicies/TermsComplaints';
import Signin from './Signin';
import Forgot from './Forgot';

import ScrollToTop from '../ScrollTo';

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest} render={matchProps => (
      <Default>
        <Component {...matchProps} />
      </Default>
    )}
  />
);

const TermsLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest} render={matchProps => (
      <Default>
        <TermsDefault>
          <Component {...matchProps} />
        </TermsDefault>
      </Default>
    )}
  />
);

export default () => (
  <ScrollToTop>
    <Switch>
      { /* Home (main) route */ }
      <DefaultLayout exact path="/" component={Home} />
      <DefaultLayout path="/about" component={About} />
      <DefaultLayout path="/contact-us" component={ContactUs} />
      <DefaultLayout exact path="/our-products" component={OurProducts} />
      <DefaultLayout path="/our-products/gap-insurance" component={GapInsurance} />
      <TermsLayout exact path="/terms-policies" component={TermsNotices} />
      <TermsLayout path="/terms-policies/cookie-policy" component={TermsCookies} />
      <TermsLayout path="/terms-policies/conflicts" component={TermsConflicts} />
      <TermsLayout path="/terms-policies/data" component={TermsDataPrivacy} />
      <TermsLayout path="/terms-policies/notification" component={TermsClaimNotif} />
      <TermsLayout path="/terms-policies/complaints" component={TermsComplaints} />
      { /* Catch all route */ }
      <Route path="/signin" component={Signin} />
      <Route path="/forgot" component={Forgot} />
      <Route component={NotFound} status={404} />
    </Switch>
  </ScrollToTop>
);
