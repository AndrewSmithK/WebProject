import React from 'react';
import { Link } from 'react-router';

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
      <div className={this.state.noticies ? 'active' : 'item-title'} onClick={this.activeNotice.bind(this)}>
        <Link to="/terms-policies">
          Legal notices
        </Link>
      </div>
      <div className={this.state.cookie ? 'active' : 'item-title'} onClick={this.activeCookie.bind(this)}>
        <Link to="/terms-policies/cookie-policy">
          Cookie policy
        </Link>
        <ul>
          <li>Log data</li>
          <li>Cookies</li>
        </ul>
      </div>
      <div className={this.state.conflicts ? 'active' : 'item-title'} onClick={this.activeConflicts.bind(this)}>
        <Link to="/terms-policies/conflicts">
          Conflicts of Interest &
          Inducement Policy
        </Link>
        <ul>
          <li>Information on the policy on conflicts of interest</li>
          <li>Information Qover's policy on inducements</li>
        </ul>
      </div>
      <div className={this.state.data ? 'active' : 'item-title'} onClick={this.activeData.bind(this)}>
        <Link to="/terms-policies/data">
          Data privacy
        </Link>
        <ul>
          <li>Summary</li>
          <li>Policy</li>
          <li>Information we may collect</li>
          <li>Communications</li>
          <li>Security</li>
          <li>Use of Personal Information</li>
          <li>Information that you provide about other parties</li>
          <li>Disclosure of your Personal Information</li>
          <li>Access to information</li>
          <li>Changes to This Privacy Policy</li>
        </ul>
      </div>
      <div className={this.state.notifications ? 'active' : 'item-title'} onClick={this.activeNotifications.bind(this)}>
        <Link to="/terms-policies/notification">
          Claim notification
        </Link>
      </div>
      <div className={this.state.complaints ? 'active' : 'item-title'} onClick={this.activeComplaints.bind(this)}>
        <Link to="/terms-policies/complaints">
          Complaints
        </Link>
        <ul>
          <li>Qover</li>
          <li>Ombudsman</li>
          <li>The European Online Dispute Resolution Platform</li>
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
