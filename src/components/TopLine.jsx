import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl-phraseapp';

import MobileNavigation from './MobileNavigation';

import MenuIcon from '../images/Header/icon-burger.svg';

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

  handleScroll() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

    let scrolling = false;

    window.addEventListener('scroll', doItOnScroll);

    function doItOnScroll() {
      scrolling = true;
    }

    setInterval(function() {
      if (scrolling && window.innerWidth > 500) {
        scrolling = false;
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        scrolled > 100 ? this.setState({ navClass: 'narrow' }) : this.setState({navClass: '' });
      }
    }.bind(this), 200);
  }

  toglMobNav() {
    this.setState({
      showMobNav: !this.state.showMobNav
    });
  }

  render() {
    return <div className={`container-fluid ${this.stateClass}`} id="topline">
      <div className="container pr-0 pl-0">
        <Link to="/" className="logo" />
        <div onClick={this.toglMobNav.bind(this)} className="burger-menu-icon">
          <img src={MenuIcon} alt="Burger Icon" />
        </div>
        <div className="topline-buttons">
          <Link className="btn btn-login" to="#">
            <FormattedMessage 
              id={`topLine.btnLogin`}
              defaultMessage={`Log in`}
            />
          </Link>
          <Link className="btn btn-access" to="#">
            <FormattedMessage 
              id={`topLine.btnAccess`}
              defaultMessage={`Request an access`}
            />
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/about">
              <FormattedMessage 
                id={`topLine.about`}
                defaultMessage={`About`}
              />
            </Link></li>
            <li>
              <Link to="/our-products">
                <FormattedMessage 
                  id={`topLine.ourProducts`}
                  defaultMessage={`Our products`}
                /><i className="fa fa-angle-down" aria-hidden="true"></i>
              </Link>
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
                        <Link to="/" style={{ color: '#31cfda' }}>
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
                        <Link to="/" style={{ color: '#3aa2d3' }}>
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
                        <Link to="/" style={{ color: '#317bda' }}>
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
            <li><Link to="/about">
              <FormattedMessage 
                id={`topLine.developers`}
                defaultMessage={`Developers`}
              />
            </Link></li>
            <li><Link to="/contact-us">
              <FormattedMessage 
                id={`topLine.contactUs`}
                defaultMessage={`Contact us`}
              />
            </Link></li>
          </ul>
        </nav>
      </div>
      { this.state.showMobNav && <MobileNavigation toglMobNav={this.toglMobNav.bind(this)} /> }
    </div>;
  }
}
