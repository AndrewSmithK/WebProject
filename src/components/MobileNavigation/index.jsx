import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl-phraseapp';

import IconClose from '../../images/Header/icon-close.svg';
import Logo from '../../images/Header/logo-qover.svg';
import './MobileNavigation.scss';

const SubNav = () => (
  <div className="subnav-wrap bg-pale-grey-two">
    <div className="subnav">
      <ul>
        <li>
          <div className="item">
            <Link to="/our-products/gap-insurance" style={{ color: '#31cfda' }}>
              <FormattedMessage 
                id={`topLine.ourProducts.gapInsurance`}
                defaultMessage={`Gap insurance`}
              />
            </Link>
          </div>
        </li>
        <li>
          <div className="item">
            <Link to="/" style={{ color: '#3daed2' }}>
              <FormattedMessage 
                id={`topLine.ourProducts.lightCasco`}
                defaultMessage={`Light-casco`}
              />
            </Link>
          </div>
        </li>
        <li>
          <div className="item">
            <Link to="/" style={{ color: '#3897d6' }}>
              <FormattedMessage 
                id={`topLine.ourProducts.fullCasco`}
                defaultMessage={`Full-casco`}
              />
            </Link>
          </div>
        </li>
        <li>
          <div className="item">
            <Link to="/" style={{ color: '#317bda' }}>
              <FormattedMessage 
                id={`topLine.ourProducts.driverAccident`}
                defaultMessage={`Driver accident`}
              />
            </Link>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div className="item">
            <Link to="/" style={{ color: '#31cfda' }}>
              <FormattedMessage 
                id={`topLine.ourProducts.accidentHealth`}
                defaultMessage={`Accident & health`}
              />
            </Link>
          </div>
        </li>
        <li>
          <div className="item">
            <Link to="/" style={{ color: '#3aa2d3' }}>
              <FormattedMessage 
                id={`topLine.ourProducts.travel`}
                defaultMessage={`Travel`}
              />
            </Link>
          </div>
        </li>
        <li>
          <div className="item">
            <Link to="/" style={{ color: '#317bda' }}>
              <FormattedMessage 
                id={`topLine.ourProducts.jobLoss`}
                defaultMessage={`Job loss`}
              />
            </Link>
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
          <li onClick={this.props.toglMobNav}><Link to="/" exact activeClassName="selected">
            <FormattedMessage 
              id={`topLine.homepage`}
              defaultMessage={`Homepage`}
            />
          </Link></li>
          <li onClick={this.props.toglMobNav}><Link to="/about" exact activeClassName="selected">
            <FormattedMessage 
              id={`topLine.about`}
              defaultMessage={`About`}
            />
          </Link></li>
          <li onClick={this.props.toglMobNav}>
            <span className="selected" onClick={this.toglSubNav.bind(this)}>
              <FormattedMessage 
                id={`topLine.ourProducts`}
                defaultMessage={`Our products`}
              /><i className="fa fa-angle-down" aria-hidden="true" />
            </span>
            { this.state.showSubNav && <SubNav /> }
          </li>
          <li onClick={this.props.toglMobNav}><Link to="/about" exact activeClassName="selected">
            <FormattedMessage 
              id={`topLine.developers`}
              defaultMessage={`Developers`}
            />
          </Link></li>
          <li onClick={this.props.toglMobNav}><Link to="/contact-us" exact activeClassName="selected">
            <FormattedMessage 
              id={`topLine.contactUs`}
              defaultMessage={`Contact us`}
            />
          </Link></li>
        </ul>
        <div className="link-block">
          <ul className="link-list">
            <li onClick={this.props.toglMobNav}><Link to="#">
              <FormattedMessage 
                id={`topLine.btnLogin`}
                defaultMessage={`Log in`}
              />
            </Link></li>
            <li onClick={this.props.toglMobNav}><Link to="#">
              <FormattedMessage 
                id={`topLine.btnAccess`}
                defaultMessage={`Request an access`}
              />
            </Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
