import React from 'react';
import { Link } from 'react-router-dom';
import LogoQover from '../images/Footer/logo-qover.svg';
import Twitter from '../images/Footer/twitter.svg';
import Facebook from '../images/Footer/facebook.svg';
import Linkedin from '../images/Footer/linkedin.svg';

export default class TopLine extends React.Component {
  render() {
    return (<footer className="footer bg-dark-blue">
      <div className="container">
        <div className="row text-white">
          <div className="logo" style={{ width: `${89}px`, marginRight: `${111  }px` }}>
            <img src={LogoQover} alt="Qover - logo-qover" />
          </div>
          <div className="item item1">
            <div className="list-title">
              <b>Company</b>
            </div>
            <ul>
              <li><Link to="/about">About Qover</Link></li>
              <li><Link to="/">Contact us</Link></li>
              <li><Link to="/">Complaints</Link></li>
              <li><Link to="/terms-policies">Terms & Policies</Link></li>
            </ul>
          </div>
          <div className="item item2">
            <div className="list-title">
              <b>Our products</b>
            </div>
            <ul>
              <li><Link to="/our-products/gap-insurance">GAP insurance</Link></li>
              { /* <li><Link to="/">Light casco</Link></li>
              <li><Link to="/">Full casco</Link></li>
              <li><Link to="/">Driver Accident</Link></li>
              <li><Link to="/">Accident & Health</Link></li>
              <li><Link to="/">Travel</Link></li>
              <li><Link to="/">Job Loss</Link></li> */ }
            </ul>
          </div>
          <div className="item item3">
            <div className="list-title">
              <b>Developers</b>
            </div>
            <ul>
              <li><Link to="/">API Documentation</Link></li>
            </ul>
          </div>
          <div className="address">
            <div className="sn text-white">
              <Link to="/">
                <div className="logo">
                  <img src={Facebook} alt="facebook" />
                </div>
              </Link>
              <Link to="/">
                <div className="logo">
                  <img src={Linkedin} alt="linkedin" />
                </div>
              </Link>
              <Link to="/">
                <div className="logo">
                  <img src={Twitter} alt="twitter" />
                </div>
              </Link>
            </div>
            <address>
              <p>
                <b>Qover SA/NV</b>
                Rue des Palais 44 - 1030 Brussels <br />
                RPM: BE0650.939.878 - FSMA: 115284A
              </p>
            </address>
          </div>
        </div>
      </div>
      <div className="copyright text-white">
        <div className="container">
          <p>
            The information given on this website is for information purposes only and is therefore not binding.
            It is the customer’s responsibility to read fully the General Policy Conditions of our products and to make carefully considered
            decisions. © 2017 Qover SA/NV – RPM 0650.939.878 – FSMA 115284A. All rights Reserved.
          </p>
        </div>
      </div>
    </footer>);
  }
}
