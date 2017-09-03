import React from 'react';
import { Link } from 'react-router-dom';

import Api from '../../images/HomePage/RobustApi/api-image.jpg';
import IconDevBig from '../../images/HomePage/RobustApi/icon-dev-big.svg';
import Blue from '../../images/HomePage/RobustApi/blue.svg';

export default class RobustApi extends React.Component {
  render() {
    return <section className="section" id="robust-api">
      <div className="icon text-center">
        <img src={IconDevBig} alt="Qover - icon-dev-big"/>
      </div>
      <h2 className="title text-grey">
        Easy to use and robust API that makes <br/>
        insurance distribution effortless
      </h2>
      <div className="gap-image">
        <img src={Api} className="img-fluid" alt="Qover - api" />
      </div>
      <div className="text-blocks container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="item">
              <h5 className="title text-grey">
                Developers first
              </h5>
              <p className="text text-grey">
                We continously seek out elegant solutions that enable robust, scalable and flexible integrations. We manage the complexity on our side so that you can get up and running with Qover in few minutes.
              </p>
              <Link className="link" to="#">
                See the API documentation<i className="fa fa-angle-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-5">
            <div className="item">
              <h5 className="title text-grey">
                Always improving
              </h5>
              <p className="text text-grey">
                Our world-class ninjas are constantly improving any fact of the Qover Stack. We develop new features, new products and new countries every months. We love it: #Hacking-Insurance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="half-circle bg-white">
        <div className="icon">
          <img src={Blue} alt="Qover - blue"/>
        </div>
      </div>
    </section>;
  }
}
