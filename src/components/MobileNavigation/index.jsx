import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';

import IconClose from '../../images/Header/icon-close.svg';
import Logo from '../../images/Header/logo-qover.svg';
import './MobileNavigation.scss';

const SubNav = () => (
  <div className="subnav-wrap bg-pale-grey-two">
    <div className="subnav">
      <ul>
        <li>
          <div className="item">
            <Link to="/our-products/gap-insurance" style={{ color: '#31cfda' }}>Gap insurance</Link>
          </div>
        </li>
        <li>
          <div className="item">
            <Link to="/" style={{ color: '#3daed2' }}>Light-casco</Link>
          </div>
        </li>
        <li>
          <div className="item">
            <Link to="/" style={{ color: '#3897d6' }}>Full-casco</Link>
          </div>
        </li>
        <li>
          <div className="item">
            <Link to="/" style={{ color: '#317bda' }}>Driver accident</Link>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div className="item">
            <Link to="/" style={{ color: '#31cfda' }}>Accident & health</Link>
          </div>
        </li>
        <li>
          <div className="item">
            <Link to="/" style={{ color: '#3aa2d3' }}>Travel</Link>
          </div>
        </li>
        <li>
          <div className="item">
            <Link to="/" style={{ color: '#317bda' }}>Job loss</Link>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default class MobileNavigation extends Component {
  constructor() {
    super();

    this.state = {
      showSubNav: false,
    };
  }

  toglSubNav() {
    this.setState({
      showSubNav: !this.state.showSubNav,
    });
  }

  render() {
    return (
      <div className="mob-nav">
        <div className="close-button" onClick={this.props.toglMobNav}>
          <img src={IconClose} alt='' />
        </div>
        <div className="mobile-logo"><img src={Logo} alt='' /></div>
        <ul className="nav-list">
          <li><Link to="/" exact activeClassName="selected">Homepage</Link></li>
          <li><Link to="/about" exact activeClassName="selected">About</Link></li>
          <li>
            <span className="selected" onClick={this.toglSubNav.bind(this)}>
                Our products<i className="fa fa-angle-down" aria-hidden="true" />
            </span>
            { this.state.showSubNav && <SubNav /> }
          </li>
          <li><Link to="/about" exact activeClassName="selected">Developers</Link></li>
          <li><Link to="/contact-us" exact activeClassName="selected">Contact us</Link></li>
        </ul>
        <div className="link-block">
          <ul className="link-list">
            <li><Link to="#">Log in</Link></li>
            <li><Link to="#">Request an access</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
