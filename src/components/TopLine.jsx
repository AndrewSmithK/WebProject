import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl-phraseapp';

import Hiring from "./Hiring";
import MobileNavigation from './MobileNavigation';

export default class TopLine extends React.Component {
  constructor() {
    super();

    this.state = {
      navClass: '',
      showMobNav: false
    };
  }

  componentDidMount() {
    this.handleScroll();
  }

  doItOnScroll(scrolled, scrolling) {
    scrolling = true;

    if (scrolling) {
      scrolling = false;
      scrolled = global.window.pageYOffset || document.documentElement.scrollTop;
      scrolled > 30 ? this.setState({ navClass: 'narrow' }) : this.setState({navClass: '' });
    }
  }

  handleScroll() {
    let scrolled = global.window.pageYOffset || global.document.documentElement.scrollTop;

    let scrolling = false;

    global.window.addEventListener('scroll', () => this.doItOnScroll(scrolled, scrolling));
  }

  toglMobNav() {
    this.setState({
      showMobNav: !this.state.showMobNav
    });
  }

  render() {
    return (<div className={global.window ? ((global.window.location.pathname).includes('/our-products/gap-insurance') ? 'opaque' : null) : null}>
      <Hiring />
      <div className={`container-fluid ${this.state.navClass}`} id="topline">
        <div className="container pr-0 pl-0">
          <div className="logo-box">
            <Link to="/" className="logo" />
          </div>
          <div onClick={this.toglMobNav.bind(this)} className="burger-menu-icon">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
          <nav>
            <ul>
              <li><NavLink activeClassName="active" to="/about">
                <FormattedMessage
                  id={`topLine.about`}
                  defaultMessage={`About`}
                />
              </NavLink></li>
              <li>
                <NavLink activeClassName="active" to="/our-products">
                  <FormattedMessage
                    id={`topLine.ourProducts`}
                    defaultMessage={`Our products`}
                  /><i className="fa fa-angle-down" aria-hidden="true"></i>
                </NavLink>
                <div className="subnav-wrap bg-pale-grey-two">
                  <div className="subnav">
                    <h5 className="title">
                      <FormattedMessage
                        id={`topLine.ourProducts.motorProducts`}
                        defaultMessage={`Motor Products`}
                      />
                    </h5>
                    <ul>
                      <li>
                        <div className="item">
                          <Link to="/our-products/gap-insurance" style={{ color: '#31cfda' }}>
                            <FormattedMessage
                              id={`topLine.ourProducts.gapInsurance`}
                              defaultMessage={`Gap insurance`}
                            />
                          </Link>
                          <p>
                            <FormattedMessage
                              id={`topLine.ourProducts.gapInsurance.desc`}
                              defaultMessage={`Protect 100% of your car’s purchase price up to 5-years.`}
                            />
                          </p>
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
                          <p>
                            <FormattedMessage
                              id={`topLine.ourProducts.lightCasco.desc`}
                              defaultMessage={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec libero`}
                            />
                          </p>
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
                          <p>
                            <FormattedMessage
                              id={`topLine.ourProducts.fullCasco.desc`}
                              defaultMessage={`In quis tellus ac quam tristique adipiscing elit. Maecenas lacinia blandit metus.`}
                            />
                          </p>
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
                          <p>
                            <FormattedMessage
                              id={`topLine.ourProducts.driverAccident.desc`}
                              defaultMessage={`In quis tellus ac quam tristique adipiscing elit. Maecenas lacinia blandit metus.`}
                            />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h5 className="title">
                      <FormattedMessage
                        id={`topLine.ourProducts.lifeStyle`}
                        defaultMessage={`Life style`}
                      />
                    </h5>
                    <ul>
                      <li>
                        <div className="item">
                          <Link to="/our-products" style={{ color: '#31cfda' }}>
                            <FormattedMessage
                              id={`topLine.ourProducts.accidentHealth`}
                              defaultMessage={`Accident & health`}
                            />
                          </Link>
                          <p>
                            <FormattedMessage
                              id={`topLine.ourProducts.accidentHealth.desc`}
                              defaultMessage={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec libero `}
                            />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <Link to="/our-products" style={{ color: '#3aa2d3' }}>
                            <FormattedMessage
                              id={`topLine.ourProducts.travel`}
                              defaultMessage={`Travel`}
                            />
                          </Link>
                          <p>
                            <FormattedMessage
                              id={`topLine.ourProducts.travel.desc`}
                              defaultMessage={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec libero `}
                            />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <Link to="/our-products" style={{ color: '#317bda' }}>
                            <FormattedMessage
                              id={`topLine.ourProducts.jobLoss`}
                              defaultMessage={`Job loss`}
                            />
                          </Link>
                          <p>
                            <FormattedMessage
                              id={`topLine.ourProducts.jobLoss`}
                              defaultMessage={`In quis tellus ac quam tristique adipiscing elit. Maecenas lacinia blandit metus.`}
                            />
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li><a href="https://www.qover.me/docs/" target="_blank" rel="noopener noreferrer">
                <FormattedMessage
                  id={`topLine.developers`}
                  defaultMessage={`Developers`}
                />
              </a></li>
              <li><NavLink activeClassName="active" to="/contact-us">
                <FormattedMessage
                  id={`topLine.contactUs`}
                  defaultMessage={`Contact us`}
                />
            </NavLink></li>
          
            </ul>
          </nav>
          <div className="topline-buttons">
          <Link className="btn btn-login" to="#">
            <FormattedMessage
              id={`topLine.btnLogin`}
              defaultMessage={`Log in`}
            />
          </Link>
          <Link className="btn btn-access" to="/registration">
            <FormattedMessage
              id={`topLine.btnAccess`}
              defaultMessage={`Request an access`}
            />
          </Link>
        </div>
      </div>
      { this.state.showMobNav && <MobileNavigation toglMobNav={this.toglMobNav.bind(this)} /> }
  </div></div>);
  }
}
