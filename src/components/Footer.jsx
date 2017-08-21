/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import LogoQover from '../images/logo-qover.png';

export default class TopLine extends React.Component {
  render() {
    return <footer className="footer bg-dark-blue">
        <div className="container">
          <div className="row text-white">
            <div className="logo col-md-2">
              <img src={LogoQover} alt="Qover - logo-qover"/>
            </div>
            <div className="item col-md-2">
              <div className="list-title">
                <b>Company</b>
              </div>
              <ul>
                <li><a href="#">About Qover</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Complaints</a></li>
                <li><a href="#">Terms & Policies</a></li>
              </ul>
            </div>
            <div className="item col-md-2">
              <div className="list-title">
                <b>Our products</b>
              </div>
              <ul>
                <li><a href="#">GAP insurance</a></li>
                <li><a href="#">Light casco</a></li>
                <li><a href="#">Full casco</a></li>
                <li><a href="#">Driver Accident</a></li>
                <li><a href="#">Accident & Health</a></li>
                <li><a href="#">Travel</a></li>
                <li><a href="#">Job Loss</a></li>
              </ul>
            </div>
            <div className="item col-md-2">
              <div className="list-title">
                <b>Developers</b>
              </div>
              <ul>
                <li><a href="#">API Documentation</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <div className="sn text-white">
                <a href="#"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
              </div>
              <address>
                <p>
                  <b>Qover SA/NV</b>
                  Rue des Palais 44 - 1030 Brussels <br/>
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
      </footer>;
    }
  }
