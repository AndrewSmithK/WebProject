/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import { Link } from 'react-router'

export default class TopLine extends React.Component {
  constructor() {
    super();

    this.state = {
      navClass: ''
    };
  }

  componentDidMount() {
    this.handleScroll();
  }

  handleScroll() {
    console.log("handleScroll");
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

    let scrolling = false;

    window.addEventListener('scroll', doItOnScroll);

    function doItOnScroll() {
        scrolling = true;
        console.log("Scroll");
    }

    setInterval(function() {
        if(scrolling) {
            scrolling = false;
            scrolled = window.pageYOffset || document.documentElement.scrollTop;
            scrolled > 100 ? this.setState({navClass: 'narrow'}) : this.setState({navClass: ''});
        }
    }.bind(this), 200);
  }
  
  render() {
    return <div className={`container-fluid ${this.state.navClass}`} id="topline">
      <div className="container">
        <Link to="/" className="logo"></Link>
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li>
              <Link to="/our-products">
                Our products<i className="fa fa-angle-down" aria-hidden="true"></i>
              </Link>
              <div className="subnav-wrap bg-pale-grey-two">
                <div className="subnav">
                  <h5 className="title">Motor Products</h5>
                  <ul>
                    <li>
                      <div className="item">
                        <Link to="#" style={{color: '#31cfda'}}>Gap insurance</Link>
                        <p>Protect 100% of your car’s purchase price up to 5-years.</p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <Link to="#" style={{color: '#3daed2'}}>Light-casco</Link>
                        <p>Protect 100% of your car’s purchase price up to 5-years.</p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <Link to="#" style={{color: '#3897d6'}}>Full-casco</Link>
                        <p>Protect 100% of your car’s purchase price up to 5-years.</p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <Link to="#" style={{color: '#317bda'}}>Driver accident</Link>
                        <p>Protect 100% of your car’s purchase price up to 5-years.</p>
                      </div>
                    </li>
                  </ul>
                  <h5 className="title">Life style</h5>
                  <ul>
                    <li>
                      <div className="item">
                        <Link to="#" style={{color: '#31cfda'}}>Accident & health</Link>
                        <p>Protect 100% of your car’s purchase price up to 5-years.</p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <Link to="#" style={{color: '#3aa2d3'}}>Travel</Link>
                        <p>Protect 100% of your car’s purchase price up to 5-years.</p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <Link to="#" style={{color: '#317bda'}}>Job loss</Link>
                        <p>Protect 100% of your car’s purchase price up to 5-years.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li><Link to="/about">Developers</Link></li>
            <li><Link to="/about">Contact us</Link></li>
          </ul>
        </nav>
        <div className="topline-buttons">
          <a className="btn btn-login" href="#">Log in</a>
          <a className="btn btn-access" href="#">Request an access</a>
        </div>
      </div>
    </div>;
  }
}
