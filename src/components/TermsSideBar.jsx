/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import {Link, Route, BrowserRouter as Router} from 'react-router';
import TermsDefault from "../layouts/TermsDefault";
import TermsNotices from '../pages/Terms & Policies/TermsNotices';
import TermsCookies from '../pages/Terms & Policies/TermsCookies';

export default class TermsNoticesSideBar extends React.Component {
  render() {
    return <section className="section" id="terms-notices">
      <Router>
        <div className="container">
          <div className="row justify-content-center">
           <div className="col-md-4">
                <h6 className="subtitle text-grey">
                  Terms & Policies
                </h6>
             <div className="col-md-10">
               <div className="item-title">
                 <Link to="/termsPolicies/notices">
                   Legal notices
                 </Link>
               </div>
               <div className="item-title">
                 <Link to="cookiePolicy">
                   Cookie policy
                 </Link>
               </div>
               <div className="item-title">
                 <Link to="conflicts">
                   Conflicts of Interest &
                   Inducement Policy
                 </Link>
               </div>
               <div className="item-title">
                 <Link to="data">
                   Data privacy
                 </Link>
               </div>
               <div className="item-title">
                 <Link to="notification">
                   Claim notification
                 </Link>
               </div>
               <div className="item-title">
                 <Link to="complaints">
                   Complaints
                 </Link>
               </div>
               <div className="item-title">
                 <Link to="FAQ">
                   FAQ
                 </Link>
               </div>
             </div>
           </div>
              <div className="col-md-8"></div>
          </div>
        </div>
        <Route exact path="/termsPolicies" component={TermsDefault}/>
        <Route path="/notices" component={TermsNotices}/>
        <Route path="/cookiePolicy" component={TermsCookies}/>
      </Router>
    </section>;
  }
}
