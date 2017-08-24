import React from 'react';
import { Link } from 'react-router';

export default class TermsSideBar extends React.Component {
  render() {
    return (<div>
      <h6 className="subtitle text-grey">
        Terms & Policies
      </h6>
      <div className="item-title">
        <Link to="/terms-policies">
          Legal notices
        </Link>
      </div>
      <div className="item-title">
        <Link to="/terms-policies/cookie-policy">
          Cookie policy
        </Link>
      </div>
      <div className="item-title">
        <Link to="/terms-policies/conflicts">
          Conflicts of Interest &
          Inducement Policy
        </Link>
      </div>
      <div className="item-title">
        <Link to="/terms-policies/data">
          Data privacy
        </Link>
      </div>
      <div className="item-title">
        <Link to="/terms-policies/notification">
          Claim notification
        </Link>
      </div>
      <div className="item-title">
        <Link to="/terms-policies/complaints">
          Complaints
        </Link>
      </div>
      <div className="item-title">
        <Link to="/terms-policies/FAQ">
          FAQ
        </Link>
      </div>
    </div>);
  }
}
