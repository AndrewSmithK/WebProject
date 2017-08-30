import React, { Component } from 'react';

import IconClose from '../images/Header/icon-close.svg';
import Logo from '../images/Header/logo-qover.svg';
import './MobileNavigation.scss';

export default class MobileNavigation extends Component {
  render() {
    return (
      <div className="mob-nav">
        <div className="close-button" onClick={this.props.toglMobNav}><img src={IconClose} /></div>
        <div className="mobile-logo"><img src={Logo} /></div>
      </div>
    );
  }
}
