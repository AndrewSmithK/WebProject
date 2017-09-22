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
          <li><a href="#data">Log data</a></li>
          <li><a href="#cookies">Cookies</a></li>
        </TermsItem>

        <TermsItem title="Conflicts of Interest & Inducement Policy" path="/terms-policies/conflicts">
          <li><a href="#conflicts">Information on the policy on conflicts of interest</a></li>
          <li><a href="#qover-policy">Information Qover's policy on inducements</a></li>
        </TermsItem>

        <TermsItem title="Data privacy" path="/terms-policies/data">
          <li><a href="#terms-notices">Summary</a></li>
          <li><a href="#policy">Policy</a></li>
          <li><a href="#information">Information we may collect</a></li>
          <li><a href="#communications">Communications</a></li>
          <li><a href="#security">Security</a></li>
          <li><a href="#personal-information">Use of Personal Information</a></li>
          <li><a href="#parties">Information that you provide about other parties</a></li>
          <li><a href="#disclouser">Disclosure of your Personal Information</a></li>
          <li><a href="#access">Access to information</a></li>
          <li><a href="#changes">Changes to This Privacy Policy</a></li>
        </TermsItem>

        <TermsItem title="Claim notification" path="/terms-policies/notification" />

        <TermsItem title="Complaints" path="/terms-policies/complaints">
          <li><a href="/terms-policies">Qover</a></li>
          <li><a href="/terms-policies">Ombudsman</a></li>
          <li><a href="/terms-policies">The European Online Dispute Resolution Platform</a></li>
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
