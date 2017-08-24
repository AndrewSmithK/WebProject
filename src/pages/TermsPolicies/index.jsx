
import React from 'react';

import TermsNotices from './TermsNotices';
import TermsCookies from './TermsCookies';
import TermsConflicts from './TermsConflicts';
import TermsDataPrivacy from './TermsDataPrivacy';
import TermsClaimNotif from './TermsClaimNotif';
import TermsComplaints from './TermsComplaints'

import './style.scss';

export default class Terms extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <TermsNotices />
            </div>
            <div className="col-md-8">
              <TermsCookies />
            </div>
            <div className="col-md-8">
              <TermsConflicts />
            </div>
            <div className="col-md-8">
              <TermsDataPrivacy />
            </div>
            <div className="col-md-8">
              <TermsClaimNotif />
            </div>
            <div className="col-md-8">
              <TermsComplaints />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
