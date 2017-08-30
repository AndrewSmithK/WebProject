import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import IconClose from '../images/Header/icon-close.svg';
import Logo from '../images/Header/logo-qover.svg';
import './MobileNavigation.scss';

export default class MobileNavigation extends Component {
  render() {
    return (
      <div className="mob-nav">
        <div className="close-button" onClick={this.props.toglMobNav}><img src={IconClose} /></div>
        <div className="mobile-logo"><img src={Logo} /></div>
        <div>
          <ul className="nav-list">
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about">Developers</Link></li>
            <li><Link to="/contact-us">Contact us</Link></li>
          </ul>
        </div>
        <div className="link-block">
          <ul className="link-list">
            <li><a href="#">Log in</a></li>
            <li><a href="#">Request an access</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
