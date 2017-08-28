import React from 'react';
import { Link } from 'react-router-dom';

export default class TermsSideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      noticies: true,
      cookie: false,
      conflicts: false,
      data: false,
      notifications: false,
      complaints: false,
    };
  }

  activeNotice() {
    this.setState({
      noticies: !this.state.noticies,
      cookie: false,
      conflicts: false,
      data: false,
      notifications: false,
      complaints: false,
    });
  }

  activeCookie() {
    this.setState({
      cookie: !this.state.cookie,
      noticies: false,
      conflicts: false,
      data: false,
      notifications: false,
      complaints: false,
    });
  }

  activeConflicts() {
    this.setState({
      conflicts: !this.state.conflicts,
      noticies: false,
      cookie: false,
      data: false,
      notifications: false,
      complaints: false,
    });
  }

  activeData() {
    this.setState({
      data: !this.state.data,
      noticies: false,
      conflicts: false,
      cookie: false,
      notifications: false,
      complaints: false,
    });
  }

  activeNotifications() {
    this.setState({
      notifications: !this.state.notifications,
      noticies: false,
      conflicts: false,
      data: false,
      cookie: false,
      complaints: false,
    });
  }

  activeComplaints() {
    this.setState({
      complaints: !this.state.complaints,
      noticies: false,
      conflicts: false,
      data: false,
      cookie: false,
      notifications: false,
    });
  }

  render() {
    return (<div className="side-container">
      <h6 className="subtitle text-grey">
        Terms & Policies
      </h6>
      <div className={`${this.state.noticies ? 'active' : ''} item-title`} onClick={this.activeNotice.bind(this)}>
        <Link to="/terms-policies">
          Legal notices
        </Link>
      </div>
      <div className={`${this.state.cookie ? 'active' : ''} item-title`} onClick={this.activeCookie.bind(this)}>
        <Link to="/terms-policies/cookie-policy">
          Cookie policy
        </Link>
        <ul>
          <li><Link to="/terms-policies">Log data</Link></li>
          <li><Link to="/terms-policies">Cookies</Link></li>
        </ul>
      </div>
      <div className={`${this.state.conflicts ? 'active' : ''} item-title`} onClick={this.activeConflicts.bind(this)}>
        <Link to="/terms-policies/conflicts">
          Conflicts of Interest &
          Inducement Policy
        </Link>
        <ul>
          <li><Link to="/terms-policies">Link   Information on the policy on conflicts of interest</Link></li>
          <li><Link to="/terms-policies">Information Qover's policy on inducements</Link></li>
        </ul>
      </div>
      <div className={`${this.state.data ? 'active' : ''} item-title`} onClick={this.activeData.bind(this)}>
        <Link to="/terms-policies/data">
          Data privacy
        </Link>
        <ul>
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
        </ul>
      </div>
      <div className={`${this.state.notifications ? 'active' : ''} item-title`} onClick={this.activeNotifications.bind(this)}>
        <Link to="/terms-policies/notification">
          Claim notification
        </Link>
      </div>
      <div className={`${this.state.complaints ? 'active' : ''} item-title`} onClick={this.activeComplaints.bind(this)}>
        <Link to="/terms-policies/complaints">
          Complaints
        </Link>
        <ul>
          <li><Link to="/terms-policies">Qover</Link></li>
          <li><Link to="/terms-policies">Ombudsman</Link></li>
          <li><Link to="/terms-policies">The European Online Dispute Resolution Platform</Link></li>
        </ul>
      </div>
      <div className="item-title">
        <Link to="/terms-policies/FAQ">
          FAQ
        </Link>
      </div>
    </div>);
  }
}
