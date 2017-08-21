/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import LogoQover from '../images/logo-qover.png';

export default class TopLine extends React.Component {
  render() {
    return <div className="container-fluid" id="topline">
      <div className="container">
        <a className="logo" href="#">
          <img  src={LogoQover} alt="logo-qover"/>
        </a>
        <nav>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">
              Our products<i className="fa fa-angle-down" aria-hidden="true"></i>
            </a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Contact us</a></li>
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
