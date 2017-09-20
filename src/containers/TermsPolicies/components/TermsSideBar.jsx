import React from 'react';
import { Link } from 'react-router-dom';

import TermsItem from './TermsItem';

export default class TermsSideBar extends React.Component {
  render() {
    return (
      <div className="side-container">
        <h6 className="subtitle text-grey">
          Terms & Policies
        </h6>
        <TermsItem title="Legal notices" path="/terms-policies" exact={true} />

        <TermsItem title="Cookie policy" path="/terms-policies/cookie-policy">
          <li><Link to="/terms-policies">Log data</Link></li>
          <li><Link to="/terms-policies">Cookies</Link></li>
        </TermsItem>

        <TermsItem title="Conflicts of Interest & Inducement Policy" path="/terms-policies/conflicts">
          <li><Link to="/terms-policies">Link   Information on the policy on conflicts of interest</Link></li>
          <li><Link to="/terms-policies">Information Qover's policy on inducements</Link></li>
        </TermsItem>

        <TermsItem title="Data privacy" path="/terms-policies/data">
          <li><Link to="/terms-policies">Summary</Link></li>
          <li><Link to="/terms-policies">Policy</Link></li>
          <li><Link to="/terms-policies">Information we may collect</Link></li>
          <li><Link to="/terms-policies">Communications</Link></li>
          <li><Link to="/terms-policies">Security</Link></li>
          <li><Link to="/terms-policies">Use of Personal Information</Link></li>
          <li><Link to="/terms-policies">Information that you provide about other parties</Link></li>
          <li><Link to="/terms-policies">Disclosure of your Personal Information</Link></li>
          <li><Link to="/terms-policies">Access to information</Link></li>
          <li><Link to="/terms-policies">Changes to This Privacy Policy</Link></li>
        </TermsItem>

        <TermsItem title="Claim notification" path="/terms-policies/notification" />

        <TermsItem title="Complaints" path="/terms-policies/complaints">
          <li><Link to="/terms-policies">Qover</Link></li>
          <li><Link to="/terms-policies">Ombudsman</Link></li>
          <li><Link to="/terms-policies">The European Online Dispute Resolution Platform</Link></li>
        </TermsItem>

        <div className="item-title">
          <a href="https://qover.zendesk.com/hc/en-us" target="_blank" rel="noopener noreferrer">
            FAQ
          </a>
        </div>
      </div>
    );
  }
}
