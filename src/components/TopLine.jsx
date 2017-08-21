/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import { Link } from 'react-router'
import LogoQover from '../images/logo-qover.png';

export default class TopLine extends React.Component {
  render() {
    return <div className="container-fluid" id="topline">
      <div className="container">
        <Link to="/" className="logo">
          <img  src={LogoQover} alt="logo-qover"/>
        </Link>
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/our-products">
              Our products<i className="fa fa-angle-down" aria-hidden="true"></i>
            </Link></li>
            <li><Link to="/about">Developers</Link></li>
            <li><Link to="/about">Contact us</Link></li>
          </ul>
        </nav>
        <div className="topline-buttons">
          <a className="btn btn-turquoise nav-button-login" href="#">Log in</a>
          <a className="btn btn-white" href="#">Request an access</a>
        </div>
      </div>
    </div>;
  }
}
