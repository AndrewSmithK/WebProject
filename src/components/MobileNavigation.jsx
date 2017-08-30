import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';

import IconClose from '../images/Header/icon-close.svg';
import Logo from '../images/Header/logo-qover.svg';
import './MobileNavigation.scss';

const SubNav = () => (
  <div className="subnav-wrap bg-pale-grey-two">
    <div className="subnav">
      <h5 className="title">Motor Products</h5>
      <ul>
        <li>
          <div className="item">
            <Link to="/our-products/gap-insurance" style={{ color: '#31cfda' }}>Gap insurance</Link>
            <p>Protect 100% of your car’s purchase price up to 5-years.</p>
          </div>
        </li>
        <li>
          <div className="item">
            <Link to="/" style={{ color: '#3daed2' }}>Light-casco</Link>
            <p>Protect 100% of your car’s purchase price up to 5-years.</p>
          </div>
        </li>
        <li>
          <div className="item">
            <Link to="/" style={{ color: '#3897d6' }}>Full-casco</Link>
            <p>Protect 100% of your car’s purchase price up to 5-years.</p>
          </div>
        </li>
        <li>
          <div className="item">
            <Link to="/" style={{ color: '#317bda' }}>Driver accident</Link>
            <p>Protect 100% of your car’s purchase price up to 5-years.</p>
          </div>
        </li>
      </ul>
      <h5 className="title">Life style</h5>
      <ul>
        <li>
          <div className="item">
            <Link to="/" style={{ color: '#31cfda' }}>Accident & health</Link>
            <p>Protect 100% of your car’s purchase price up to 5-years.</p>
          </div>
        </li>
        <li>
          <div className="item">
            <Link to="/" style={{ color: '#3aa2d3' }}>Travel</Link>
            <p>Protect 100% of your car’s purchase price up to 5-years.</p>
          </div>
        </li>
        <li>
          <div className="item">
            <Link to="/" style={{ color: '#317bda' }}>Job loss</Link>
            <p>Protect 100% of your car’s purchase price up to 5-years.</p>
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
      showSubNav: false
    }
  }

  toglSubNav() {
    this.setState({
      showSubNav: !this.state.showSubNav
    });
  }

  render() {
    return (
      <div className="mob-nav">
        <div className="close-button" onClick={this.props.toglMobNav}><img src={IconClose} /></div>
        <div className="mobile-logo"><img src={Logo} /></div>
        <div>
          <ul className="nav-list">
            <li><Link to="/" exact activeClassName="selected">Homepage</Link></li>
            <li><Link to="/about" exact activeClassName="selected">About</Link></li>
            <li>
              <Link to="/our-products" exact activeClassName="selected" onClick={this.toglSubNav.bind(this)}>
                Our products<i className="fa fa-angle-down" aria-hidden="true"></i>
              </Link>
              { this.state.showSubNav && <SubNav /> }
            </li>
            <li><Link to="/about" exact activeClassName="selected">Developers</Link></li>
            <li><Link to="/contact-us" exact activeClassName="selected">Contact us</Link></li>
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
